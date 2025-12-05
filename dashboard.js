var userEmail=document.getElementById("useremail")
var userpassword=document.getElementById("userpassword")
var username=document.getElementById("name")



function setUseremail(){
    var email = localStorage.getItem("email");
        var password=localStorage.getItem("password")
                var name=localStorage.getItem("name")


          userEmail.innerText = email;
          userpassword.innerText = password;
          username.innerText= name;
          if(email==null){
            window.location.href="./login.html"
          }
        }
        setUseremail()
        function logout(){
          // localStorage.clear()
          localStorage.setItem("login",false)
          window.location.href=("./login.html")
        }




