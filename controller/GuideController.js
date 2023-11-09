//Regex content
const regExGuideUsername = /^[A-Z|a-z\s]{3,20}$/;
const regExGuidePassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
const regExGuideName = /^[A-Z|a-z\s]{3,20}$/;
const regExContact = /^(071|072|074|076|078|070|075|077)\d{7}$/;
const regExAge = /^(1[89]|[2-5]\d|65)$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const regExDayValue = /^[0-9]{1,10}[0-9]{2}$/;
const experience = /^[0-9A-Z a-z,/:]{4,50}$/;
const remarks = /^[0-9A-Z a-z,/:]{4,50}$/;

// Guide Name Input validation
$("#guide_name").change(function (event) {
  const name = $('#guide_name').val();
  if (regExGuideName.test(name)) {
    $("#guide_name").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#guidAddress").focus();
    }
  } else {
    $("#guide_name").css('border', '2px solid red');
    alert("Invaid name Check again!");
  }
});

// // Guide Address Input validation
$("#guidAddress").change(function (event) {
  const address = $('#guidAddress').val();
  if (regExAddress.test(address)) {
    $("#guidAddress").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#age").focus();
    }
  } else {
    $("#guidAddress").css('border', '2px solid red');
    alert("Invaid Address Check again!");
  }
});

// // Guide Age Input validation
$("#age").change(function (event) {
  const age = $('#age').val();
  if (regExAge.test(age)) {
    $("#age").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#gender").focus();
    }
  } else {
    $("#age").css('border', '2px solid red');
    alert("Invaid Age Check again!");
  }
});

// // Guide Contact Input validation
$("#contact").change(function (event) {
  const contact = $('#contact').val();
  if (regExContact.test(contact)) {
    $("#contact").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#experiences").focus();
    }
  } else {
    $("#contact").css('border', '2px solid red');
    alert("Invaid Contact No: Check again!");
  }
});

// // Guide DayValue Input validation
$("#day_value").change(function (event) {
  const dayValue = $('#day_value').val();
  if (regExDayValue.test(dayValue)) {
    $("#day_value").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#remark").focus();
    }
  } else {
    $("#day_value").css('border', '2px solid red');
    alert("Invaid value Check again!");
  }
});

$('#experiences').change(function (event) {
  const exp = $("#experiences").val();
  if (experience.test(exp)) {
    $("#experiences").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#remark").focus();
    }
  } else {
    $("#experiences").css('border', '2px solid red');
    alert("Invaid value Check again!");
  }
});

$("#remark").change(function (event) {
  const rem = $('#remark').val();
  if (remarks.test(rem)) {
    $("#remark").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      //
    }
  } else {
    $("#remark").css('border', '2px solid red');
    alert("Invaid value Check again!");
  }
});


//create guide details object
function guideDetails() {

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

  const guidePfp = $('#profile_pic')[0].files[0];
  saveFiles(guidePfp);
  const nicImagefile = $('#nic_pic')[0].files[0]
  saveFiles(nicImagefile);

  const guidePfpName = $('#profile_pic')[0].files[0].name;
  const nicImageName = $('#nic_pic')[0].files[0].name;

  // const guidepfp = $('#profile_pic').val();
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
    policyId: policyId,
    guideImage: guidePfpName,
    nicImage:nicImageName
  }
  return guideObj;
}

//Key Events
$('#guide-save-btn').click(function (e) {

  //get returned guide obj
  const guideDetailsObj= guideDetails();
  // guideDetails();

  // Create Post Request
  $.ajax({
    url: baseURL + "guide/save",
    method: "post",
    data: JSON.stringify(guideDetailsObj),
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


function saveFiles(files) {

  var data = new FormData();
  data.append("imageFile", files);

  $.ajax({
    url: fileUploadURL + "upload",
    method: 'post',
    async: true,
    contentType: false,
    processData: false,
    data: data,
    success: function (resp) {
      console.log(resp);
    },
    error: function (err) {
      console.log(err);
    }
  });
}


//get All Guide Details
function getAllGuideDetails() {
  $.ajax({
    url: baseURL + "guide/getAll",
    method: "GET",
    success: function (response) {
      console.log(response.data);
      $("#Guide-Details-table tbody").empty();
      response.forEach(element => {
        let rawData = `<tr class="text-center">
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
                <td>
                  <div class="d-flex align-items-center justify-content-center">
                    <img src="http://localhost:8095/FileHandling/download/${element.data.guideImage}" alt="" style="width: 80px; height: 50px" class="rounded"/>
                  </div>
                </td>
                <td>
                <div class="d-flex align-items-center jus">
                  <img src="http://localhost:8095/FileHandling/download/${element.data.nicImage}" alt="" style="width: 80px; height: 50px" class="rounded"/>
                </div>
              </td>
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
      const guidId = response.data;
      console.log("guid Id ", guidId);
      let tempId = parseInt(guidId.split("-")[1]);
      console.log(tempId);
      tempId = tempId + 1;
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

//update guideDetails event
$("#guide-update-btn").click(function (e) {

  //get returned guide obj
  const guideDetailsObj = guideDetails();

  //create put request
  $.ajax({
    url: baseURL + "guide/update",
    method: "put",
    data: JSON.stringify(guideDetailsObj),
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
    }
  });
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
