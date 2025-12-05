var email = document.getElementById("email");
var password = document.getElementById("password");
var userName = document.getElementById("name");

var userObj = [];

function signUp() {
  if (userName.value == "") {
    Toastify({
      text: "please enter your user name",
      className: "error",
      position: "center",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, red,red)",
      },
    }).showToast();
  } else if (email.value == "") {
    Toastify({
      text: "please enter your user email",
      className: "error",
      position: "center",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, red,red)",
      },
    }).showToast();
  } else if (password.value == "") {
    Toastify({
      text: "please enter your password",
      className: "error",
      position: "center",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, red,red)",
      },
    }).showToast();
  } else {
    var exitUser = false;
    var selectedIndex = "";
    for (var i = 0; i < userObj.length; i++) {
      if (userObj[i].email == email.value) {
        exitUser = true;
        selectedIndex = i;
        break;
      }
    }
    if (exitUser == true) {
      Toastify({
        text: "email already exit",
        className: "error",
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, red,red)",
        },
      }).showToast();
    } else {
      userObj.push({
        email: email.value,
        password: password.value,
        name: userName.value,
      });

      Toastify({
        text: "signup sucessfully",
        className: "error",
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, red,red)",
        },
      }).showToast();
        localStorage.setItem("users", JSON.stringify(userObj));

        


      setTimeout(() => {
           window.location.href = "./login.html";
      }, 1000);

     
      // localStorage=?string
    }
  }
}

function setData() {
  var userData = localStorage.getItem("users");
  userObj = JSON.parse(userData) || [];
  console.log(userData);
  console.log(userObj);
}
setData();
