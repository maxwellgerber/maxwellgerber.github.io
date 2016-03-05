var express = require('express');
var fs    = require("fs");
var nodemailer = require('nodemailer');


var app = express();
app.set('view engine', 'jade');
// Routes
//app.use(express.static('public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/404', function (request, response) {
  response.send('404 error lol');
});

app.get('/:stuff', function (request, response) {
	console.log(request.params.stuff + ' requested');
	var parsed = request.params.stuff.replace('\.html','');
  response.render(parsed, {}, function(err, html){
  	if(err){
  		response.render('404');
  	} else {
  		response.send(html);
  	}
  });
});

app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  console.log(req);
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: "maxwell.gerber42@gmail.com",
          pass: "Josephine1!" 
      }
  });
  //Mail options
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'mgerber@berkeley.edu',
      subject: 'Website contact form',
      text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});

app.listen(80);