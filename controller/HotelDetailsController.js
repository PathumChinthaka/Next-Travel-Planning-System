

const hotelNameRegex = /^[a-zA-Z\s]+$/;
const hotelCategoryRegex = /^[a-zA-Z]+$/;
const hotelEmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const cityRegex = /^[a-zA-Z\s]+$/;
const mobileNumberRegex = /^(071|072|074|076|078|070|075|077)\d{7}$/;
const descriptionRegex = /^[a-zA-Z0-9\s.,#!&*()-]+$/;
const websiteLinkRegex = /^(http|https):\/\/[A-Za-z0-9\-.]+(\.[A-Za-z]{2,4}){1,2}\/?([A-Za-z0-9\-.\/]*)$/;
const facebookLinkRegex = /^https:\/\/www\.facebook\.com\/[a-zA-Z0-9.]+$/;
const instaLinkRegex = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9._]+$/;
const hotelStatusRegex = /^[a-zA-Z\s]+$/;
const googleMapLocationRegex = /^(http|https):\/\/[A-Za-z0-9\-.]+(\.[A-Za-z]{2,4}){1,2}\/?([A-Za-z0-9\-.\/]*)$/;
const faxNumberRegex = /^\d{10}$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const telephoneRegex = /^(011|038|034)\d{7}$/;


// hotelNameRegex
$("#hotel_Name").change(function (event) {
  const name = $('#hotel_Name').val();
  if (hotelNameRegex.test(name)) {
    $("#hotel_Name").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_Name").css('border', '2px solid red');
    alert("Invaid hotel Name Check again!");
    return;
  }
});

$("#hotel_Email").change(function (event) {
  const n = $('#hotel_Email').val();
  if (hotelEmailRegex.test(n)) {
    $("#hotel_Email").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_Email").css('border', '2px solid red');
    alert("Invaid Email Check again!");
    return;
  }
});

$("#city").change(function (event) {
  const n = $('#city').val();
  if (cityRegex.test(n)) {
    $("#city").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#city").css('border', '2px solid red');
    alert("Invaid city name Check again!");
    return;
  }
});

$("#hotel_mobile").change(function (event) {
  const n = $('#hotel_mobile').val();
  if (mobileNumberRegex.test(n)) {
    $("#hotel_mobile").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_mobile").css('border', '2px solid red');
    alert("Invaid Mobile No Check again!");
    return;
  }
});

// mobileNumberRegex
$("#hotel_Tele").change(function (event) {
  const n = $('#hotel_Tele').val();
  if (telephoneRegex.test(n)) {
    $("#hotel_Tele").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_Tele").css('border', '2px solid red');
    alert("Invaid Telephone NO Check again!");
    return;
  }
});

$("#Hotel_address").change(function (event) {
  const n = $('#Hotel_address').val();
  if (regExAddress.test(n)) {
    $("#Hotel_address").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#Hotel_address").css('border', '2px solid red');
    alert("Invaid address Check again!");
    return;
  }
});


$("#hotel_description").change(function (event) {
  const name = $('#hotel_description').val();
  if (hotelNameRegex.test(name)) {
    $("#hotel_description").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_description").css('border', '2px solid red');
    alert("Invaid hotel Name Check again!");
    return;
  }
});

$("#fax_Number").change(function (event) {
  const n = $('#fax_Number').val();
  if (telephoneRegex.test(n)) {
    $("#fax_Number").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#fax_Number").css('border', '2px solid red');
    alert("Invaid Telephone NO Check again!");
    return;
  }
});


$("#website_link").change(function (event) {
  const n = $('#website_link').val();
  if (regExAddress.test(n)) {
    $("#website_link").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#website_link").css('border', '2px solid red');
    alert("Invaid address Check again!");
    return;
  }
});


$("#facebook-link").change(function (event) {
  const n = $('#facebook-link').val();
  if (regExAddress.test(n)) {
    $("#facebook-link").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#facebook-link").css('border', '2px solid red');
    alert("Invaid address Check again!");
    return;
  }
});


$("#Inster-link").change(function (event) {
  const n = $('#Inster-link').val();
  if (regExAddress.test(n)) {
    $("#Inster-link").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#Inster-link").css('border', '2px solid red');
    alert("Invaid address Check again!");
    return;
  }
});


$("#hotel_status").change(function (event) {
  const name = $('#hotel_status').val();
  if (hotelNameRegex.test(name)) {
    $("#hotel_status").css('border', '2px solid rgb(222, 226, 230)');
    if (event.key == "Enter") {
      $("#").focus();
    }
  } else {
    $("#hotel_status").css('border', '2px solid red');
    alert("Invaid hotel Name Check again!");
    return;
  }
});


//create hotel details object
function hotelDetails() {

  const hotelId = $('#hotel_Id').val();
  const hotelName = $('#hotel_Name').val();
  const hotelCategory = $('#hotel_Category').val();
  const hotelEmail = $('#hotel_Email').val();
  const hotelTele = $('#hotel_Tele').val();
  const hotelMobile = $('#hotel_mobile').val();
  const address = $('#Hotel_address').val();
  const city = $('#city').val();
  const MapLocation = $('#Map-location').val();
  const hotelDescription = $('#hotel_description').val();
  const faxNumber = $('#fax_Number').val();
  const websiteLink = $('#website_link').val();
  const facebookLink = $('#facebook-link').val();
  const InsterLink = $('#Inster-link').val();
  const hotelStatus = $('#hotel_status').val();

  const hotelDetails = {
    hotelId: hotelId,
    hotelName: hotelName,
    hotelCategory: {
      hotelCategoryId: '',
      hotelCategory: hotelCategory
    },
    email: hotelEmail,
    telephone: hotelTele,
    mobile: hotelMobile,
    fax: faxNumber,
    address: address,
    city: city,
    mapLocation: MapLocation,
    description: hotelDescription,
    websiteLink: websiteLink,
    facebook: facebookLink,
    instagram: InsterLink,
    status: hotelStatus
  }

  return hotelDetails;
}

//hotel details save event
$("#hotel-save-btn").click(function (e) {

  //get returned hotel Details object
  const hotelDetailsObj = hotelDetails();

  // Create Post Request
  $.ajax({
    url: hotelBaseURL + "/save",
    method: "post",
    data: JSON.stringify(hotelDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        clearHotelInputFields();
        getAllHotelDetails();
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});

//get all hotel details
function getAllHotelDetails() {
  $.ajax({
    url: hotelBaseURL + "/getAll",
    method: "GET",
    success: function (response) {
      $("#hotel-details-tbl tbody").empty();
      response.forEach(element => {
        let rawDataOne = `<tr>
                <td> ${element.data.hotelId}</td>
                <td>${element.data.hotelName}</td>
                <td> ${element.data.hotelCategory.hotelCategory}</td>
                <td> ${element.data.email}</td>
                <td> ${element.data.telephone}</td>
                <td> ${element.data.mobile}</td>
                <td> ${element.data.city}</td>
                <td> ${element.data.address}</td>
                </tr>`;
        $("#hotel-details-tbl tbody").append(rawDataOne);
      });
      // //load 2 nd table data
      $("hotel-details-tbl2 tbody").empty();
      response.forEach(element => {
        let rawDataTwo = `<tr>
                <td> ${element.data.hotelId}</td>
                <td class="d-none">${element.data.hotelName}</td>
                <td> ${element.data.mapLocation}</td>
                <td>${element.data.description}</td>
                <td> ${element.data.fax}</td>
                <td> ${element.data.websiteLink}</td>
                <td> ${element.data.facebook}</td>
                <td> ${element.data.instagram}</td>
                <td> ${element.data.status}</td>
                </tr>`;
        $("#hotel-details-tbl2 tbody").append(rawDataTwo);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

// getAllHotelDetails();

$("#hotel-update-btn").click(function (e) {

  //get returned hotel Details object
  const hotelDetailsObj = hotelDetails();

  // Create Put Request
  $.ajax({
    url: hotelBaseURL + "/update",
    method: "put",
    data: JSON.stringify(hotelDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        clearHotelInputFields();
      };
    },
    error: function (xhr, status, error) {
      console.error(error);
      alert("An error occurred: " + error);
    }
  });
});


$("#hotel-details-tbody,#hotel-details-tbody2").on('click', 'tr', (event) => {

  const hotelId = $(event.target).closest('tr').find('td').eq(0).text();

  $.ajax({
    url: hotelBaseURL + "/" + hotelId,
    method: "GET",
    success: function (response) {
      console.log(response.data);
      $('#hotel_Id').val(response.data.hotelId);
      $('#hotel_Name').val(response.data.hotelName);
      $('#hotel_Category').val(response.data.hotelCategory);
      $('#hotel_Email').val(response.data.email);
      $('#hotel_Tele').val(response.data.telephone);
      $('#hotel_mobile').val(response.data.mobile);
      $('#Hotel_address').val(response.data.address);
      $('#city').val(response.data.city);
      $('#Map-location').val(response.data.mapLocation);
      $('#hotel_description').val(response.data.description);
      $('#fax_Number').val(response.data.fax);
      $('#website_link').val(response.data.websiteLink);
      $('#facebook-link').val(response.data.facebook);
      $('#Inster-link').val(response.data.instagram);
      $('#hotel_status').val(response.data.status);
    },
    error: function (xhr, status, error) {
      alert("An error occurred hotel tbody getreq: " + error);
    }
  });
});

//delete hotel details event
$("#hotel-delete-btn").click(function (e) {
  const hotelId = $('#hotel_Id').val();
  const choice = confirm("Do you want to delete this Data ?");
  if (hotelId == "") {
    alert("Hotel Id is Empty");
    return;
  } else if (choice == true) {
    $.ajax({
      url: hotelBaseURL + "/" + hotelId,
      method: "delete",
      dataType: "json",
      success: function (response) {
        alert(response.message);
      },
      error: function (xhr, status, error) {
        alert("Hotel Data Deleted Succesfully");
        $("#hotel-details-tbody,#hotel-details-tbody2").empty();
        getAllHotelDetails();
        clearHotelInputFields();
      }
    });
  } else {
    clearHotelInputFields();
  }
});


//clear input fields
function clearHotelInputFields() {
  $('#hotel_Id').val("");
  $('#hotel_Name').val("");
  $('#hotel_Category').val("");
  $('#hotel_Email').val("");
  $('#hotel_Tele').val("");
  $('#hotel_mobile').val("");
  $('#Hotel_address').val("");
  $('#city').val("");
  $('#Map-location').val("");
  $('#hotel_description').val("");
  $('#fax_Number').val("");
  $('#website_link').val("");
  $('#facebook-link').val("");
  $('#Inster-link').val("");
  $('#hotel_status').val("");
}