
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