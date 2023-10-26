
//handle vehicle save event
$("#vehicle-save-btn").click(function (e) {
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

  // Create Post Request
  $.ajax({
    url: baseURL + "vehicle/save",
    method: "post",
    data: JSON.stringify(vehicleDetails),
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

//get selected vehicle row from db
function getSelectedVehicleRaw() {

  $('#vehicle-tbody-one').on('click', 'tr', (event) => {
    const vehicleId = $(event.target).closest('tr').find('td').eq(0).text();
    const vehicleCategory = $(event.target).closest('tr').find('td').eq(1).text();
    const vehicleName = $(event.target).closest('tr').find('td').eq(2).text();
    const fuelType = $(event.target).closest('tr').find('td').eq(3).text();
    const fuelUsage = $(event.target).closest('tr').find('td').eq(4).text();
    const isHybrid = $(event.target).closest('tr').find('td').eq(5).text();
    const seatCount = $(event.target).closest('tr').find('td').eq(6).text();

    $('#vehicle_id').val(vehicleId.trim());
    $('#vehicleCategory').val(vehicleCategory.trim());
    $('#vehicle_name').val(vehicleName.trim());
    $('#fuel_type').val(fuelType.trim());
    $('#fuel_usage').val(fuelUsage.trim());
    $('#is_Hybrid').val(isHybrid.trim());
    $('#seat_count').val(seatCount.trim());
  });

  $('#vehicle-tbody-two').on('click', 'tr', (event) => {
    const vehicleId = $(event.target).closest('tr').find('td').eq(0).text();
    const transmission = $(event.target).closest('tr').find('td').eq(1).text();
    const fuelUsageCost = $(event.target).closest('tr').find('td').eq(2).text();
    const perDayCharage = $(event.target).closest('tr').find('td').eq(3).text();
    const oneKmCharge = $(event.target).closest('tr').find('td').eq(4).text();
    const remarks = $(event.target).closest('tr').find('td').eq(5).text();
    const policyType = $(event.target).closest('tr').find('td').eq(6).text();

    $('#vehicle_id').val(vehicleId.trim());
    $('#transmision_type').val(transmission.trim());
    $('#fuel_usage_cost').val(fuelUsageCost.trim());
    $('#Vehicle_charge').val(perDayCharage.trim());
    $('#vehical_1km_charge').val(oneKmCharge.trim());
    $('#vehicle_remarks').val(remarks.trim());
    $('#policy-type').val(policyType.trim());
  });
}

//get Selected vehicle raw globally
getSelectedVehicleRaw();

//update guide details event
$("#vehicle-update-btn").click(function (e) {

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

  //create put mapping ajax
  $.ajax({
    url: baseURL + "vehicle/update",
    method: "put",
    data: JSON.stringify(vehicleDetails),
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
