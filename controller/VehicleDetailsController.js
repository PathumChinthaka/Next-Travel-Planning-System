
const NameRegex = /^[a-zA-Z\s]+$/;
const CategoryRegex = /^[a-zA-Z]+$/;
const hotelEmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const fueltypeRegex = /^[a-zA-Z\s]+$/;
const mobileNumberRegex = /^(071|072|074|076|078|070|075|077)\d{7}$/;
const fuelUsageRegex = /^(\d+(\.\d+)?)([ ]?L)?$/;
const descriptionRegex = /^[a-zA-Z0-9\s.,#!&*()-]+$/;
const hotelStatusRegex = /^[a-zA-Z\s]+$/;
const faxNumberRegex = /^\d{10}$/;
const regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
const telephoneRegex = /^\d{10}$/;
var regExPrice = /^[0-9]{1,10}[0-9]{2}$/;
var regExDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExDistance = /^[0-9]{1,5}$/;
const regExfuelUsage = /^[0-9]L{1,2}$/;
const seatCount = /^[0-9]{1,2}$/;
const cost = /^[0-9]{2,4}$/;


$("#vehicle_name").change(function (event) {
  const name = $('#vehicle_name').val();
  if (NameRegex.test(name)) {
    $("#vehicle_name").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#vehicle_name").css('border', '2px solid red');
    alert("Invaid vehicle Name Check again!");
  }
});

$("#fuel_usage").change(function (event) {
  const name = $('#fuel_usage').val();
  if (regExfuelUsage.test(name)) {
    $("#fuel_usage").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#fuel_usage").css('border', '2px solid red');
    alert("Invaid Fuel Usage Check again!");
  }
});

$("#seat_count").change(function (event) {
  const name = $('#seat_count').val();
  if (seatCount.test(name)) {
    $("#seat_count").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#seat_count").css('border', '2px solid red');
    alert("Invaid seat count Check again!");
  }
});

$("#fuel_usage_cost").change(function (event) {
  const name = $('#fuel_usage_cost').val();
  if (cost.test(name)) {
    $("#fuel_usage_cost").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#fuel_usage_cost").css('border', '2px solid red');
    alert("Invaid Fuel Usage cost Check again!");
  }
});

$("#Vehicle_charge").change(function (event) {
  const name = $('#Vehicle_charge').val();
  if (cost.test(name)) {
    $("#Vehicle_charge").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#Vehicle_charge").css('border', '2px solid red');
    alert("Invaid vehicle charge Check again!");
  }
});

$("#vehical_1km_charge").change(function (event) {
  const name = $('#vehical_1km_charge').val();
  if (cost.test(name)) {
    $("#vehical_1km_charge").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#vehical_1km_charge").css('border', '2px solid red');
    alert("Invaid vehicle 1km charge Check again!");
  }
});

$("#vehicle_remarks").change(function (event) {
  const name = $('#vehicle_remarks').val();
  if (NameRegex.test(name)) {
    $("#vehicle_remarks").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#vehicle_remarks").css('border', '2px solid red');
    alert("Invaid status Check again!");
  }
});

//return vehicle details object
function vehicleDetails(){

  const vehicleId = $('#vehicle_id').val();
  const vehicleCategory = $('#vehicleCategory').val();
  const vehicleName = $('#vehicle_name').val();
  const fuelType = $('#fuel_type').val();
  const fuelUsage = $('#fuel_usage').val();
  const isHybrid = $('#is_Hybrid').val();
  const seatCount = $('#seat_count').val();
  const transmission = $('#transmision_type').val();
  const fuelUsageCost = $('#fuel_usage_cost').val();
  const perDayCharage = $('#Vehicle_charge').val();
  const oneKmCharge = $('#vehical_1km_charge').val();
  const remarks = $('#vehicle_remarks').val();
  const policyType = $('#policy-type').val();

  const vehicleDetails = {
    vehicleId: vehicleId,
    vehicleCategory: vehicleCategory,
    vehicleName: vehicleName,
    fuelType: fuelType,
    isHybrid: isHybrid,
    fuelUsage: fuelUsage,
    seatCount: seatCount,
    transmissionType: transmission,
    fuelUsageCost: fuelUsageCost,
    perDayCharge: perDayCharage,
    vehicle1kmCharge: oneKmCharge,
    remarks: remarks,
    policyType: policyType
  }

  return vehicleDetails;
}
//handle vehicle save event
$("#vehicle-save-btn").click(function (e) {
  
  //get returnd vehicle object
  const vehicleDetailsObj=vehicleDetails();

  // Create Post Request
  $.ajax({
    url: baseURL + "vehicle/save",
    method: "post",
    data: JSON.stringify(vehicleDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllVehicleDetails();
        clearVehicleInputs();

      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
  console.log(vehicleDetails);
});

//get All vehicle details
function getAllVehicleDetails() {
  $.ajax({
    url: baseURL + "vehicle/getAll",
    method: "GET",
    success: function (response) {
      //load 1 st table data
      $("#vehicle-table-one tbody").empty();
      response.forEach(element => {
        let rawDataOne = `<tr>
                <td> ${element.data.vehicleId}</td>
                <td>${element.data.vehicleCategory}</td>
                <td> ${element.data.vehicleName}</td>
                <td> ${element.data.fuelType}</td>
                <td> ${element.data.fuelUsage}</td>
                <td> ${element.data.isHybrid}</td>
                <td> ${element.data.seatCount}</td>
                </tr>`;
        $("#vehicle-table-one tbody").append(rawDataOne);
      });
      //load 2 nd table data
      $("#vehicle-table-two tbody").empty();
      response.forEach(element => {
        let rawDataTwo = `<tr>
                <td> ${element.data.vehicleId}</td>
                <td> ${element.data.transmissionType}</td>
                <td>${element.data.fuelUsageCost}</td>
                <td> ${element.data.perDayCharge}</td>
                <td> ${element.data.vehicle1kmCharge}</td>
                <td> ${element.data.remarks}</td>
                <td> ${element.data.policyType}</td>
                </tr>`;
        $("#vehicle-table-two tbody").append(rawDataTwo);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
};

//get All Vehicle Details globally
getAllVehicleDetails();

$("#vehicle-tbody-one,#vehicle-tbody-two").on('click', 'tr', (event) => {
  const vehicleId=$(event.target).closest('tr').find('td').eq(0).text();
  $.ajax({
    url: baseURL + "vehicle/" + vehicleId,
    method: "GET",
    success: function (response) {
      console.log(response.data);
      $('#vehicle_id').val(response.data.vehicleId);
      $('#vehicleCategory').val(response.data.vehicleCategory);
      $('#vehicle_name').val(response.data.vehicleName);
      $('#fuel_type').val(response.data.fuelType);
      $('#fuel_usage').val(response.data.fuelUsage);
      $('#is_Hybrid').val(response.data.isHybrid);
      $('#seat_count').val(response.data.seatCount);
      $('#transmision_type').val(response.data.transmissionType);
      $('#fuel_usage_cost').val(response.data.fuelUsageCost);
      $('#Vehicle_charge').val(response.data.perDayCharge);
      $('#vehical_1km_charge').val(response.data.vehicle1kmCharge);
      $('#vehicle_remarks').val(response.data.remarks);
      $('#policy-type').val(response.data.policyType);
    },
    error: function (xhr, status, error) {
      alert("An error occurred vehicle tbody getreq: " + error);
    }
  });
});

//update guide details event
$("#vehicle-update-btn").click(function (e) {

  //get returnd vehicle object
  const vehicleDetailsObj=vehicleDetails();

  //create put mapping ajax
  $.ajax({
    url: baseURL + "vehicle/update",
    method: "put",
    data: JSON.stringify(vehicleDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllVehicleDetails();
        clearVehicleInputs();
      };
    },
    error: function (xhr, status, error) {
      console.error(error);
      alert("An error occurred: " + error);
    },
  });
});


//delete guide details event
$("#vehicle-delete-btn").click(function (e) {
  const choice = confirm("Do you want to delete this Data ?");
  if (choice == true) {
    const vehicleId = $('#vehicle_id').val();
    $.ajax({
      url: baseURL + "vehicle/" + vehicleId,
      method: "delete",
      dataType: "json",
      success: function (response) {
        alert(response.message);
      },
      error: function (xhr, status, error) {
        alert("Vehicle Data Deleted");
        $("#vehicle-tbody-one,#vehicle-tbody-two").empty();
        getAllVehicleDetails();
        clearVehicleInputs();
      }
    });
  } else {
    clearVehicleInputs();
  }
});

//create clear input function
function clearVehicleInputs() {
  $('#vehicle_id').val("");
  $('#vehicleCategory').val("");
  $('#vehicle_name').val("");
  $('#fuel_type').val("");
  $('#fuel_usage').val("");
  $('#is_Hybrid').val("");
  $('#seat_count').val("");
  $('#transmision_type').val("");
  $('#fuel_usage_cost').val("");
  $('#Vehicle_charge').val("");
  $('#vehical_1km_charge').val("");
  $('#vehicle_remarks').val("");
  $('#policy-type').val("");
}
