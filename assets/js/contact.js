function myFunction(){
       var name = $("input#name").val();  
       var email = $("input#email").val(); 
       var message = $("textarea#message").val();
       var subject = "[CONTACT] ".concat(name).concat(" ").concat(email)
  window.open('mailto:mgerber@berkeley.edu?subject='+ subject + '&body=' + message);
}