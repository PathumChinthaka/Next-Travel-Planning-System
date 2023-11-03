

const regExUsername = /^[A-Z|a-z\s]{3,20}$/;
const regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
const regExContact = /^(071|072|074|076|078|070|075|077)\d{7}$/;
const regExNIC = /^[0-9]{12}$/;
const regExAge = /^(1[89]|[2-5]\d|65)$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const regExRemarks = /^[A-Z|a-z\s]{3,20}$/;

$("#user_Name").change(function (event) {
  const name = $('#user_Name').val();
  if (regExUsername.test(name)) {
    $("#user_Name").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Name").css('border', '2px solid red');
    alert("Invaid name Check again!");
  }
});

$("#user_Password").change(function (event) {
  const name = $('#user_Password').val();
  if (regExPassword.test(name)) {
    $("#user_Password").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Password").css('border', '2px solid red');
    alert("Invaid password Check again!");
  }
});

$("#user_Contact").change(function (event) {
  const name = $('#user_Contact').val();
  if (regExContact.test(name)) {
    $("#user_Contact").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Contact").css('border', '2px solid red');
    alert("Invaid contact Check again!");
  }
});

$("#user_Age").change(function (event) {
  const name = $('#user_Age').val();
  if (regExAge.test(name)) {
    $("#user_Age").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Age").css('border', '2px solid red');
    alert("Invaid age Check again!");
  }
});

$("#user_Address").change(function (event) {
  const name = $('#user_Address').val();
  if (regExAddress.test(name)) {
    $("#user_Address").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Address").css('border', '2px solid red');
    alert("Invaid Address Check again!");
  }
});

$("#userNicPassport").change(function (event) {
  const name = $('#userNicPassport').val();
  if (regExNIC.test(name)) {
    $("#userNicPassport").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#userNicPassport").css('border', '2px solid red');
    alert("Invaid Address Check again!");
  }
});

$("#user_Remarks").change(function (event) {
  const name = $('#user_Remarks').val();
  if (regExAddress.test(name)) {
    $("#user_Remarks").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#user_Remarks").css('border', '2px solid red');
    alert("Invaid Address Check again!");
  }
});

//create user details obj
function userDetails(){

  const userId = $('#user_Id').val();
  const userName = $('#user_Name').val();
  const userPassword = $('#user_Password').val();
  const userGender = $('#user_Gender').val();
  const userContact = $('#user_Contact').val();
  const userAge = $('#user_Age').val();
  const userAddress = $('#user_Address').val();
  const userNicPassport = $('#userNicPassport').val();
  const userRemarks = $('#user_Remarks').val();

  const userDetailsObj={
    userId:userId,
    userName:userName,
    userPassword:userPassword,
    userContactNo:userContact,
    userNic:userNicPassport,
    userAge:userAge,
    gender:userGender,
    address:userAddress,
    remarks:userRemarks
  }

  return userDetailsObj;
}

//create a post request

$("#user-save-btn").click(function (e) { 

  const userDetailsObj=userDetails();

  $.ajax({
    url: baseWebURL + "user/save",
    method: "post",
    data: JSON.stringify(userDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
  
});


//get All user details on table view
function getAllGuideDetails() {
  $.ajax({
    url: baseURL + "user/getAll",
    method: "GET",
    success: function (response) {
      $("#user-details-table tbody").empty();
      response.forEach(element => {
        let rawData = `<tr>
                <td class="d-none"> ${element.data.userId}</td>
                <td>${element.data.userName}</td>
                <td> ${element.data.userPassword}</td>
                <td> ${element.data.userContactNo}</td>
                <td> ${element.data.userNic}</td>
                <td> ${element.data.userAge}</td>
                <td> ${element.data.gender}</td>
                <td> ${element.data.address}</td>
                <td> ${element.data.remarks}</td>
                </tr>`;
        $("#user-details-table tbody").append(rawData);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

//get All details globally called
// getAllGuideDetails();

//create user update req
$("#user-update-btn").click(function (e) { 

  const userDetailsObj=userDetails();

  $.ajax({
    url: baseURL + "user/update",
    method: "put",
    data: JSON.stringify(userDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
  
});

//delete user request create
$("#user-delete-btn").click(function (e) {
  const userId = $('#user_Id').val();
  const choice = confirm("Do you want to delete this Data ?");
  if(userId==""){
    alert("User Id is Empty");
    return;
  }else if(choice == true){
    $.ajax({
      url: baseURL + "user/" + userId,
      method: "delete",
      dataType: "json",
      success: function (response) {
        alert(response.message);
      },
      error: function (xhr, status, error) {
        alert("User Data Deleted Succesfully");
      }
    });
  }else{
  }
});

//clear user details inputs
function clearUserInputFields(){
    $('#user_Id').val("");
    $('#user_Name').val("");
    $('#user_Password').val("");
    $('#user_Gender').val("");
    $('#user_Contact').val("");
    $('#user_Age').val("");
    $('#user_Address').val("");
    $('#userNicPassport').val("");
    $('#user_Remarks').val("");
}