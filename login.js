var email = document.getElementById("email");
var password = document.getElementById("password");

// var useremail = "new@yopmail.com";
// var userpassword = "Abc123@!";

// array of objects

var userObj = [] || [];

function reDirect() {
  var status = localStorage.getItem("login");
  // console.log(status)
  if (status==false) {
    window.location.href = "./dashboard.html";
  }
}

reDirect();

function loginUser() {
  if (email.value == "") {
    Toastify({
      text: "please enter your email",
      className: "error",
      position: "center",
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, red,red)",
      },
    }).showToast();
  } else if (password.value == "") {
    Toastify({
      text: "please enter password",
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
      console.log(userObj[selectedIndex]);
      if (userObj[selectedIndex].password == password.value) {
        localStorage.setItem("login", true);
        localStorage.setItem("email", email.value);
        localStorage.setItem("name", userObj[selectedIndex].name);

        Toastify({
          text: "login success",
          className: "error",
          position: "center",
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right, green,blue)",
          },
        }).showToast();
        setTimeout(() => {
          window.location.href = "./dashboard.html";
        }, 1000);
      } else {
        Toastify({
          text: "invalid password",
          className: "error",
          position: "center",
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right, red,red)",
          },
        }).showToast();
      }
    } else {
      Toastify({
        text: "user not regsister please signup",
        className: "error",
        position: "center",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, red,red)",
        },
      }).showToast();
    }
  }

  //   else if (email.value != useremail) {
  //     Toastify({
  //       text: "user not regsister",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, red,red)",
  //       },
  //     }).showToast();
  //   } else if (password.value != userpassword) {
  //     Toastify({
  //       text: "invalid password",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, red,red)",
  //       },
  //     }).showToast();
  //   } else {
  //     console.log(email.value, password.value);
  //     // localStorage.setItem(Key,value)
  //     localStorage.setItem("login", true);
  //     localStorage.setItem("email", email.value);
  //     Toastify({
  //       text: "login success",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, green,blue)",
  //       },
  //     }).showToast();
  //     setTimeout(() => {
  //       window.location.href = "./dashboard.html";
  //     }, 1000);

  //     // localStorage.setItem("password",email.value)
  //   }
}

// flag=>boolean

function setData() {
  var userData = localStorage.getItem("users");
  userObj = JSON.parse(userData) ||[];
  console.log(userData);
  console.log(userObj);
}
setData();
