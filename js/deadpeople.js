var width = 960,
    height = 500;

var mydata = {};

var path = d3.geo.path();

var color = d3.scale.category20();

var svg = 
    d3.select("body").select("#target").append("svg")
    .attr("width", width)
    .attr("height", height);

console.log("FOO BAR")

queue()
    .defer(d3.json, "assets/us.json")
    .defer(d3.json, "assets/us-state-centroids.json")
    .defer(d3.tsv, "assets/us-state-names.tsv")
    .await(ready);

function listbuilder(name_arr){
    var list = ""
    name_arr.map( el => {
        list = list.concat("<dd>" + el.name + " : "  + el.count + "</dd>");
    });
    return list;
}

function loadInitialData(){
  var xhttp = new XMLHttpRequest();

  xhttp.addEventListener("load", function() {
    mydata = JSON.parse(this.responseText);
    mydata["state_first_names"] = {};
    document.getElementById("selected_count").innerHTML = mydata.pop_distribution['United States'];
    document.getElementById("selected_avg_len").innerHTML = mydata.obit_length['United States'];
    document.getElementById("selected_names").innerHTML = listbuilder(mydata.first_names);
  });

  xhttp.open("GET", "https://g8shhmquq2.execute-api.us-east-1.amazonaws.com/prod/testOpenAccessApi", true);
  xhttp.send();
}

loadInitialData();

function preloadStateData(state, cb){
  var xhttp = new XMLHttpRequest();

  xhttp.addEventListener("load", function() {
    var stateData = JSON.parse(this.responseText)["first_names"];
    mydata["state_first_names"][state] = stateData;
    cb();
  });

  xhttp.open("GET", "https://g8shhmquq2.execute-api.us-east-1.amazonaws.com/prod/testOpenAccessApi?state="+state, true);
  xhttp.send();
}

function loadStateData(state) {
    function callback(){
        document.getElementById("selected_names").innerHTML = listbuilder(mydata["state_first_names"][state]);
    }
    preloadStateData(state, callback);
};

function ready(error, us, centroid, tsv) {
    var countries = topojson.feature(us, us.objects.states).features,
        neighbors = topojson.neighbors(us.objects.states.geometries);

    var names = {};
    tsv.forEach((d,i)=>{
      names[d.id] = d.name;
    });

    svg.selectAll("states")
        .data(countries)
        .enter()
        .insert("path", ".graticule")
        .attr("class", "states")
        .attr("d", path)
        .style("fill", (d, i)=>{
            return color(2); 
        })
        .on('click', function(d, i) {

            d3.selectAll('path').style('fill-opacity',.3);
            d3.select(this).style('fill-opacity', 1);

            var stateName = names[d.id];
            document.getElementById("selected_name").innerHTML = stateName;
            document.getElementById("selected_count").innerHTML = mydata.pop_distribution[stateName];
            document.getElementById("selected_avg_len").innerHTML = mydata.obit_length[stateName];
            if(stateName in mydata.state_first_names) {
                document.getElementById("selected_names").innerHTML = listbuilder(mydata["state_first_names"][stateName]);
            } else {
                document.getElementById("selected_names").innerHTML = '...';
                loadStateData(stateName);
            }

            d3.event.stopPropagation();
        })
        // .on('mouseover', (d, i)=>{
        //     var stateName = names[d.id];
        //     if(!(stateName in mydata.state_first_names)) {
        //         preloadStateData(stateName, ()=>{});
        //     };
        // })

    svg.on('click', function(d, i){
        document.getElementById("selected_name").innerHTML = "United States";
        document.getElementById("selected_count").innerHTML = mydata.pop_distribution['United States'];
        document.getElementById("selected_avg_len").innerHTML = mydata.obit_length['United States'];
        document.getElementById("selected_names").innerHTML = listbuilder(mydata.first_names);

        d3.selectAll('path').style('fill-opacity',1);
    })
}