//server URL
const baseURL = "http://localhost:8085/NextTravel/api/guide/";

//Regex content
const regExGuideUsername = /^[A-Z|a-z\s]{3,20}$/;
const regExGuidePassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
const regExGuideName = /^[A-Z|a-z\s]{3,20}$/;
const regExContact = /^(071|077|075|078|076)[0-9]{7}$/;
const regExAge = /^[1-9]{1,2}$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const regExDayValue = /^[0-9]{1,10}(.)[0-9]{2}$/;

// Guide Name Input validation
$("#guide_name").keydown(function (event) {
  const name = $('#guide_name').val();
  if (regExGuideName.test(name)) {
    $("#guide_name").css('border', '2px solid #134eed');
    if (event.key == "Enter") {
      $("#guidAddress").focus();
    }
  } else {
    $("#guide_name").css('border', '2px solid red');
    console.log("Invaid name Check again!");
  }
});

// Guide Address Input validation
$("#guidAddress").keydown(function (event) {
  const address = $('#guidAddress').val();
  if (regExAddress.test(address)) {
    $("#guidAddress").css('border', '2px solid #134eed');
    if (event.key == "Enter") {
      $("#age").focus();
    }
  } else {
    $("#guidAddress").css('border', '2px solid red');
    console.log("Invaid Address Check again!");
  }
});

// Guide Age Input validation
$("#age").keydown(function (event) {
  const age = $('#age').val();
  if (regExAge.test(age)) {
    $("#age").css('border', '2px solid #134eed');
    if (event.key == "Enter") {
      $("#gender").focus();
    }
  } else {
    $("#age").css('border', '2px solid red');
    console.log("Invaid Age Check again!");
  }
});

// Guide Contact Input validation
$("#contact").keydown(function (event) {
  const contact = $('#contact').val();
  if (regExContact.test(contact)) {
    $("#contact").css('border', '2px solid #134eed');
    if (event.key == "Enter") {
      $("#experiences").focus();
    }
  } else {
    $("#contact").css('border', '2px solid red');
    console.log("Invaid Contact No: Check again!");
  }
});

// Guide DayValue Input validation
$("#day_value").keydown(function (event) {
  const dayValue = $('#day_value').val();
  if (regExDayValue.test(dayValue)) {
    $("#contact").css('border', '2px solid #134eed');
    if (event.key == "Enter") {
      $("#remark").focus();
    }
  } else {
    $("#contact").css('border', '2px solid red');
    console.log("Invaid Contact No: Check again!");
  }
});

//Key Events
$('#guide-save-btn').click(function (e) {

  //Get guideDetails
  const guidId = $('#guid_Id').val();
  const name = $('#guide_name').val();
  const guidAddress = $('#guidAddress').val();
  const age = $('#age').val();
  const gender = $('#guide_gender').val();
  const contact = $('#contact').val();
  const guideExperience = $('#experiences').val();
  const dayValue = $('#day_value').val();
  const remarks = $('#remark').val();
  const policyId = $('#can_policy').val();

  //Create guide details object
  let guideObj = {
    guidId: guidId,
    guidName: name,
    address: guidAddress,
    age: age,
    gender: gender,
    contact: contact,
    experience: guideExperience,
    dayValue: dayValue,
    remarks: remarks,
    policyId: policyId
  };

  // Create Post Request
  $.ajax({
    url: baseURL + "save",
    method: "POST",
    data: JSON.stringify(guideObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200){
        alert("response ok");
        getAllGuideDetails();
        clearFields();
      }
    },
    error: function (error) {
      var jsObject = JSON.parse(error.responseText);
      alert(jsObject.message);
    }
  });
});

//get All Guide Details
function getAllGuideDetails() {
  $.ajax({
    url: baseURL + "getAll",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log(response);
      // $("#Guide-Details-table tbody").empty();
      // for (var responseKey of response.data) {
      //   let rawData = `<tr>
      //           <td> ${responseKey.driverId}</td>
      //           <td>${responseKey.driverName}</td>
      //           <td> ${responseKey.driverAddress}</td>
      //           <td> ${responseKey.driverAge}</td>
      //           <td> ${responseKey.driverContact}</td>
      //           <td>
      //           <button type="button" id="btnEditDriver" 
      //           class="btn btn-primary btn-sm px-3" data-ripple-color="dark">
      //           <i class="bi bi-pencil-square"></i>
      //           </button>
      //           <button type="button" id="btnEditDriver" 
      //           class="btn btn-danger btn-sm px-3" data-ripple-color="dark">
      //           <i class="bi bi-trash3-fill"></i>
      //           </button>
      //           </td>
      //           </tr>`;
      //   $("#Guide-Details-table tbody").append(rawData);
      // }
    },
    error: function (error) {
      var jsObject = JSON.parse(error.responseText);
      alert(jsObject.message);
    }
  });
}

//clear input fields
function clearFields(){
  $('#guid_Id').val("");
  $('#guide_name').val("");
  $('#guidAddress').val("");
  $('#age').val("");
  $('#guide_gender').val("");
  $('#contact').val("");
  $('#experiences').val("");
  $('#day_value').val("");
  $('#remark').val("");
  $('#can_policy').val("");
}
