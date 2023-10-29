
$('#hotel-details-tbody,#hotel-details-tbody2').on('click', 'tr', (event) => {
  alert($(event.target).closest('tr').find('td').eq(0).text());
});

//create hotel details object
function hotelDetails(){

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

  const hotelDetails={
    hotelId:hotelId,
    hotelName:hotelName,
    hotelCategory:{
      hotelCategoryId:'',
      hotelCategory:hotelCategory
    },
    email:hotelEmail,
    telephone:hotelTele,
    mobile:hotelMobile,
    fax:faxNumber,
    address:address,
    city:city,
    MapLocation:MapLocation,
    description:hotelDescription,
    websiteLink:websiteLink,
    facebook:facebookLink,
    instagram:InsterLink,
    status:hotelStatus
  }

  return hotelDetails;
}

//hotel details save event
$("#hotel-save-btn").click(function (e) {

  //get returned hotel Details object
  const hotelDetailsObj=hotelDetails();

  // Create Post Request
  $.ajax({
    url: baseURL + "hotel/save",
    method: "post",
    data: JSON.stringify(hotelDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        clearHotelInputFields();
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});

//get all hotel details
function getAllHotelDetails(){
  $.ajax({
    url: baseURL + "hotel/getAll",
    method: "GET",
    success: function (response) {
      // $("#hotel-details-tbl tbody").empty();
      // response.forEach(element => {
      //   let rawDataOne = `<tr>
      //           <td> ${element.data.vehicleId}</td>
      //           <td>${element.data.vehicleCategory}</td>
      //           <td> ${element.data.vehicleName}</td>
      //           <td> ${element.data.fuelType}</td>
      //           <td> ${element.data.fuelUsage}</td>
      //           <td> ${element.data.isHybrid}</td>
      //           <td> ${element.data.seatCount}</td>
      //           </tr>`;
      //   $("#vehicle-table-one tbody").append(rawDataOne);
      // });
      // //load 2 nd table data
      // $("#vehicle-table-two tbody").empty();
      // response.forEach(element => {
      //   let rawDataTwo = `<tr>
      //           <td> ${element.data.vehicleId}</td>
      //           <td> ${element.data.transmissionType}</td>
      //           <td>${element.data.fuelUsageCost}</td>
      //           <td> ${element.data.perDayCharge}</td>
      //           <td> ${element.data.vehicle1kmCharge}</td>
      //           <td> ${element.data.remarks}</td>
      //           <td> ${element.data.policyType}</td>
      //           </tr>`;
      //   $("#vehicle-table-two tbody").append(rawDataTwo);
      // });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

$("#hotel-update-btn").click(function (e) {

    //get returned hotel Details object
  const hotelDetailsObj=hotelDetails();

  // Create Put Request
  $.ajax({
    url: baseURL + "hotel/update",
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

//delete hotel details event
$("#hotel-delete-btn").click(function (e) {
  const hotelId = $('#hotel_Id').val();
  const choice = confirm("Do you want to delete this Data ?");
  if(hotelId==""){
    alert("Hotel Id is Empty");
    return;
  }else if(choice == true){
    $.ajax({
      url: baseURL + "hotel/" + hotelId,
      method: "delete",
      dataType: "json",
      success: function (response) {
        alert(response.message);
      },
      error: function (xhr, status, error) {
        alert("Package Deleted Succesfully");
      }
    });
  }else{
    clearHotelInputFields();
  }
});


//clear input fields
function clearHotelInputFields(){
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