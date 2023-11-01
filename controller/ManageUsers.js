

var regExUsername = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExNIC = /^[0-9]{12}$/;
var regExAge = /^[1-9]{1,2}$/;
var regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
var regExRemarks = /^[A-Z|a-z\s]{3,20}$/;


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