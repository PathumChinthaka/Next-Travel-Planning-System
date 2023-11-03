

var regExUsername = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
const EmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

$("#first-Name").change(function (event) {
  const name = $('#first-Name').val();
  if (regExUsername.test(name)) {
    $("#first-Name").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#last-Name").focus();
    }
  } else {
    $("#first-Name").css('border', '2px solid red');
    alert("Invaid name Check again!");
  }
});

$("#last-Name").change(function (event) {
  const name = $('#last-Name').val();
  if (regExUsername.test(name)) {
    $("#last-Name").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#userEmail").focus();
    }
  } else {
    $("#last-Name").css('border', '2px solid red');
    alert("Invaid name Check again!");
  }
});

$("#userEmail").change(function (event) {
  const name = $('#userEmail').val();
  if (EmailRegex.test(name)) {
    $("#userEmail").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#userEmail").focus();
    }
  } else {
    $("#userEmail").css('border', '2px solid red');
    alert("Invaid email Check again!");
  }
});

$("#user-email").change(function (event) {
  const name = $('#user-email').val();
  if (EmailRegex.test(name)) {
    $("#user-email").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#userEmail").focus();
    }
  } else {
    $("#user-email").css('border', '2px solid red');
    alert("Invaid email Check again!");
  }
});

$("#Password").change(function (event) {
  const name = $('#Password').val();
  if (regExPassword.test(name)) {
    $("#Password").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#userEmail").focus();
    }
  } else {
    $("#Password").css('border', '2px solid red');
    alert("Invaid password Check again!");
  }
});

$("#userPassword").change(function (event) {
  const name = $('#userPassword').val();
  if (regExPassword.test(name)) {
    $("#userPassword").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#userEmail").focus();
    }
  } else {
    $("#userPassword").css('border', '2px solid red');
    alert("Invaid Password Check again!");
  }
});

//create user register data object
function travelerRegisterData() {

  const travelerObj = {
    firstName: $('#first-Name').val(),
    lastName: $('#last-Name').val(),
    email: $('#userEmail').val(),
    password: $('#Password').val()
  }
  return travelerObj;
};

//save user register data function
function saveRegisterData() {

  const registerData = this.travelerRegisterData();

  $.ajax({
    url:baseWebURL+"authentication/register",
    type: "POST",
    data: JSON.stringify(registerData),
    contentType: "application/json",
    dataType: "json",
    // headers: {
    //   // "Content-Type": "application/json"
    // },
    success: (response) => {
      alert("register ok");
      console.log(response.data);
      localStorage.setItem('token',response.data.token);
    },
    error: (message) => {
      console.log(message);
    }
  });
}

//user registration button event
$("#register-btn").click(function (e) {
  saveRegisterData();
});


//create login data object
function travelerLoginData(){
  const userName=$('#user-email').val();
  const userPassword=$('#userPassword').val();
  const loginAs=$('#login-as').val();

  const userObj={
    email:userName,
    password:userPassword,
    userRole:loginAs
  }
  return userObj;
}

//user login function
function travelerLogin(){

  const loginData=travelerLoginData();

  const token = localStorage.getItem('token');

  $.ajax({
    url:baseWebURL+"authentication/authenticate",
    type: "POST",
    data: JSON.stringify(loginData),
    contentType: "application/json",
    dataType: "json",
    success: (response) => {
      alert('authenticate ok');
      localStorage.setItem('token',response.data.token);
      if(response.data.token){
        $('body').load('dashboard.html');
      }
    },
    headers: {
      'Authorization': `Bearer ${token}`
    },
    error: (message) => {
      alert("Invalid Username OR Password");
      console.log(message);
    }
  });
}

//login button event
$("#login-btn").click(function (e) {
 travelerLogin();
});