/* core.js */

///////////////////////////////////
// Function for contact form
(function () {
  'use strict';
  try {
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
      window.location = 'mailto:tom@kellsehand.com?subject=' + subject + ' - ' + name + '&body=' + message;
    };
  } catch(e){}
}());


///////////////////////////////////
// Function for mobile  menu
(function () {
  'use strict';
  try {
    var bars = document.getElementById('bars'),
        items = document.getElementById('items');
    
    bars.onclick = function (e) {
      e.preventDefault();
      if (items.className !== 'show') {
        items.className = 'show';
      } else {
        items.className = 'hide';
      }
    }
  } catch(e){}
}());