//server URL
// var baseURL = "http://localhost:8085/NextTravel/api/guide";

//Regex content
const regExGuideUsername = /^[A-Z|a-z\s]{3,20}$/;
const regExGuidePassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
const regExGuideName = /^[A-Z|a-z\s]{3,20}$/;
const regExContact = /^(075|077|071|074|078|076|070|072)([0-9]{7})$/;
const regExAge = /^[1-9]{1,1}$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const regExDayValue = /^[0-9]{1,10}(.)[0-9]{2}$/;

// // Guide Name Input validation
// $("#guide_name").keydown(function (event) {
//   const name = $('#guide_name').val();
//   if (regExGuideName.test(name)) {
//     $("#guide_name").css('border', '2px solid #134eed');
//     if (event.key == "Enter") {
//       $("#guidAddress").focus();
//     }
//   } else {
//     $("#guide_name").css('border', '2px solid red');
//     console.log("Invaid name Check again!");
//   }
// });

// // // Guide Address Input validation
// $("#guidAddress").keydown(function (event) {
//   const address = $('#guidAddress').val();
//   if (regExAddress.test(address)) {
//     $("#guidAddress").css('border', '2px solid #134eed');
//     if (event.key == "Enter") {
//       $("#age").focus();
//     }
//   } else {
//     $("#guidAddress").css('border', '2px solid red');
//     console.log("Invaid Address Check again!");
//   }
// });

// // // Guide Age Input validation
// $("#age").keydown(function (event) {
//   const age = $('#age').val();
//   if (regExAge.test(age)) {
//     $("#age").css('border', '2px solid #134eed');
//     if (event.key == "Enter") {
//       $("#gender").focus();
//     }
//   } else {
//     $("#age").css('border', '2px solid red');
//     console.log("Invaid Age Check again!");
//   }
// });

// // // Guide Contact Input validation
// $("#contact").keydown(function (event) {
//   const contact = $('#contact').val();
//   if (regExContact.test(contact)) {
//     $("#contact").css('border', '2px solid #134eed');
//     if (event.key == "Enter") {
//       $("#experiences").focus();
//     }
//   } else {
//     $("#contact").css('border', '2px solid red');
//     console.log("Invaid Contact No: Check again!");
//   }
// });

// // // Guide DayValue Input validation
// $("#day_value").keydown(function (event) {
//   const dayValue = $('#day_value').val();
//   if (regExDayValue.test(dayValue)) {
//     $("#contact").css('border', '2px solid #134eed');
//     if (event.key == "Enter") {
//       $("#remark").focus();
//     }
//   } else {
//     $("#contact").css('border', '2px solid red');
//     console.log("Invaid Contact No: Check again!");
//   }
// });




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
    url: baseURL + "guide/save",
    method: "post",
    data: JSON.stringify(guideObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllGuideDetails();
        clearFields();
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});

//get All Guide Details
function getAllGuideDetails() {
  $.ajax({
    url: baseURL + "guide/getAll",
    method: "GET",
    success: function (response) {
      $("#Guide-Details-table tbody").empty();
      response.forEach(element => {
        let rawData = `<tr>
                <td class="d-none"> ${element.data.guidId}</td>
                <td>${element.data.guidName}</td>
                <td> ${element.data.address}</td>
                <td> ${element.data.age}</td>
                <td> ${element.data.gender}</td>
                <td> ${element.data.contact}</td>
                <td> ${element.data.experience}</td>
                <td> ${element.data.dayValue}</td>
                <td> ${element.data.policyId}</td>
                <td> ${element.data.remarks}</td>
                </tr>`;
        $("#Guide-Details-table tbody").append(rawData);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

// get all guide details method globally calling
getAllGuideDetails();

//genarate auto increment ID
function generateAutoIncrementID() {
  $('#guid_Id').val("C00-0001");
  $.ajax({
    url: baseURL + "guide/latestId",
    method: "GET",
    success: function (response) {
      const guidId=response.data;
      console.log("guid Id ",guidId);
      let tempId = parseInt(guidId.split("-")[1]);
      console.log(tempId);
      tempId=tempId+1;
      if (tempId <= 9) {
      $('#guid_Id').val("C00-000" + tempId);
    } else if (tempId <= 99) {
      $('#guid_Id').val("D00-00" + tempId);
    } else if (tempId <= 999) {
      $('#guid_Id').val("D00-0" + tempId);
    } else {
      $('#guid_Id').val("D00-" + tempId);
    }
    },
    error: function (xhr, status, error) {
      alert("genarate Id An error occurred: " + error);
    }
  });
}

// update guide details
function updateGuideDetails() {

  const guidId = $('#guid_Id').val();
  const name = $('#guide_name').val();
  const guidAddress = $('#guidAddress').val();
  const age = $('#age').val();
  const gender = $('#guide_gender').val();
  const contact = $('#contact').val();
  const guideExperience = $('#experiences').val();
  const dayValue = $('#day_value').val();
  const policyId = $('#can_policy').val();
  const remarks = $('#remark').val();

  //Create guide details object
  var guideObj = {
    guidId: guidId,
    guidName: name,
    address: guidAddress,
    gender: gender,
    age: age,
    contact: contact,
    experience: guideExperience,
    dayValue: dayValue,
    policyId: policyId,
    remarks: remarks
  };

  $.ajax({
    url: baseURL + "guide/update",
    method: "put",
    data: JSON.stringify(guideObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllGuideDetails();
        clearFields();
      };
    },
    error: function (xhr, status, error) {
      console.error(error);
      alert("An error occurred: " + error);
    },
  });
}

//update guideDetails event
$("#guide-update-btn").click(function (e) {
  updateGuideDetails();
});


//delete guide details
function deleteGuidDetails() {
  const guidId = $('#guid_Id').val();
  $.ajax({
    url: baseURL + "guide/" + guidId,
    method: "delete",
    dataType: "json",
    success: function (response) {
      alert(response.message);
      getAllGuideDetails();
      clearFields();
    },
    error: function (xhr, status, error) {
      getAllGuideDetails();
      clearFields();
    }
  });
}

//delete guide details
$("#guide-delete-btn").click(function (e) {
  const choice = confirm("Do you want to delete this Data ?");
  choice == true ? deleteGuidDetails() : clearFields();
});

//get selected table row
function getSelectedRow() {

  $('#guide-details-tbody').on('click', 'tr', (event) => {
    // $('#guid_Id').prop("readonly", true);
    const guidId = $(event.target).closest('tr').find('td').eq(0).text();
    const name = $(event.target).closest('tr').find('td').eq(1).text();
    const guidAddress = $(event.target).closest('tr').find('td').eq(2).text();
    const age = $(event.target).closest('tr').find('td').eq(3).text();
    const gender = $(event.target).closest('tr').find('td').eq(4).text();
    const contact = $(event.target).closest('tr').find('td').eq(5).text();
    const guideExperience = $(event.target).closest('tr').find('td').eq(6).text();
    const dayValue = $(event.target).closest('tr').find('td').eq(7).text();
    const policyId = $(event.target).closest('tr').find('td').eq(8).text();
    const remarks = $(event.target).closest('tr').find('td').eq(9).text();

    $('#guid_Id').val(guidId.trim());
    $('#guide_name').val(name.trim());
    $('#guidAddress').val(guidAddress.trim());
    $('#age').val(age.trim());
    $('#guide_gender').val(gender.trim());
    $('#contact').val(contact.trim());
    $('#experiences').val(guideExperience.trim());
    $('#day_value').val(dayValue.trim());
    $('#can_policy').val(policyId.trim());
    $('#remark').val(remarks.trim());
  });
};

//globally calling getSelected Row
getSelectedRow();

//clear input fields
function clearFields() {
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
};
