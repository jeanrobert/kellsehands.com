/* core.js */

///////////////////////////////////
// Function for contact form
(function () {
  'use strict';
  
  var name,
      email,
      phone,
      subject,
      message,
      send = document.getElementById('user-send');
  
  send.onclick = function (e) {
      name    = document.getElementById('user-name').value,
      email   = document.getElementById('user-email').value,
      subject = document.getElementById('user-subject').value,
      message = document.getElementById('user-message').value;
        
      e.preventDefault();
      window.location = 'mailto:chemserve@outlook.com?subject=' + subject + ' from ' + name + '&body=' + message;
  };
}());


///////////////////////////////////
// Function for mobile  menu
(function () {
  'use strict';
  
  var name,
      email,
      phone,
      subject,
      message,
      send = document.getElementById('user-send');
  
  send.onclick = function (e) {
    e.preventDefault();
    name    = document.getElementById('user-name').value,
    email   = document.getElementById('user-email').value,
    subject = document.getElementById('user-subject').value,
    message = document.getElementById('user-message').value;
    
    window.location = 'mailto:tom@kellsehand.com?subject=' + subject + ' from ' + name + '&body=' + message;
  };
}());