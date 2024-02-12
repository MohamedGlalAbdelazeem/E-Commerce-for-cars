// lgoi
$(document).ready(function() {
    let loginUser = $('#loginUser');
    let loginpass = $('#loginpass');
    let loginBtn = $('#loginBtn');

    let getUser = localStorage.getItem("username");
    let getPassword = localStorage.getItem("password");
  
    loginUser.val(getUser);
    loginpass.val(getPassword);
  
    loginBtn.on('click', function(e) {
      e.preventDefault();
      if (localStorage.getItem("username") && localStorage.getItem("password")) {
        window.location = "shop.html";
      } else {
        alert("Please Singup first1️⃣");
        window.location = "singup.html";
      }
    });
  });
  