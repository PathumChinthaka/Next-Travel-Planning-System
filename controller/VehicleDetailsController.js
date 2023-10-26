

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
    fuelUsage: fuelUsage,
    isHybrid: isHybrid,
    seatCount: seatCount,
    transmission: transmission,
    fuelUsageCost: fuelUsageCost,
    perDayCharage: perDayCharage,
    oneKmCharge: oneKmCharge,
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
    url: baseURL + "guide/getAll",
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
                <td> ${element.data.transmission}</td>
                <td>${element.data.fuelUsageCost}</td>
                <td> ${element.data.perDayCharage}</td>
                <td> ${element.data.oneKmCharge}</td>
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
