$(document).ready(function () {
  getAllPackageDetails();
  getAllVehicleDetails();
});

//get all package details and append on cards
function getAllPackageDetails() {
  $.ajax({
    url: baseURL + "package/getAll",
    method: "GET",
    success: function (response) {
      $("#package-table tbody").empty();
      response.forEach(element => {
        const cardData =
          `<div class="card my-3" style="width:40rem;">
              <div class="card-body">
                <h5 class="card-title">${element.data.packageCategory}</h5>
                <div class="d-flex">
                  <div class="w-60">
                    <div class="my-2">
                    <span class="font-weight-bold">Package Name :</span>
                    ${element.data.packageName}
                    </div>
                    <div class="my-2">
                    <span class="font-weight-bold">Day Count :</span>
                    ${element.data.dayCount}
                    </div>
                    <div class="my-2">
                    <span>Night Count :</span>
                    ${element.data.nightCount}
                    </div>
                  </div>
                  <div class="mx-5">
                    <div class="my-2">
                    <span>Travel Area :</span>
                    ${element.data.travelAreas}
                    </div>
                    <div class="my-2">
                    <span>Allow Pets :</span>
                    ${element.data.allowPets}
                    </div>
                    <div class="my-2">
                    <span>Room Types :</span>
                    ${element.data.roomTypes}
                    </div>
                  </div>
                </div>
                <div class="my-2">
                  <span>Package Description</span>
                  <p class="card-text my-1">${element.data.packageDescription}</p>
                </div>
                <button class="btn btn-primary my-2">Select package</button>
              </div>
            </div>`;
        $("#Booking-cards").append(cardData);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

//get All vehicle details and append on cards
function getAllVehicleDetails(){
  $.ajax({
    url: vehicleBaseURL + "/getAll",
    method: "GET",
    success: function (response) {
      $("#package-table tbody").empty();
      response.forEach(element => {
        const cardData =
          `<div class="card my-3" style="width:35rem;">
              <div class="card-body">
                <h5 class="card-title">${element.data.vehicleCategory}</h5>
              <div class="d-flex align-items-center justify-content-center">
                  <div>
                    <img src="http://localhost:8095/FileHandling/download/${element.data.vehicleImage}" alt="" style="width: 80px; height: 50px" class="rounded"/>
                  </div>
                  <div>
                      <img src="http://localhost:8095/FileHandling/download/${element.data.vehicleLicenImage}" alt="" style="width: 80px; height: 50px" class="rounded"/>
                  </div>
              </div>
                <div class="d-flex justify-content-between">
                  <div class="w-40">
                    <div class="my-2">
                    <span class="font-weight-bold">Vehicle Name :</span>
                    ${element.data.vehicleName}
                    </div>
                    <div class="my-2">
                    <span class="font-weight-bold">Fuel type :</span>
                    ${element.data.fuelType}
                    </div>
                    <div class="my-2">
                    <span>Fuel usage :</span>
                    ${element.data.fuelUsage}
                    </div>
                    <div class="my-2">
                    <span>Is Hybrid :</span>
                    ${element.data.isHybrid}
                    </div>
                    <div class="my-2">
                    <span>Seat Count :</span>
                    ${element.data.seatCount}
                    </div>
                  </div>
                  <div class="mx-5">
                    <div class="my-2">
                    <span>Auto/Menual type :</span>
                    ${element.data.transmissionType}
                    </div>
                    <div class="my-2">
                    <span>Fuel Usage Cost :</span>
                    ${element.data.fuelUsageCost}
                    </div>
                    <div class="my-2">
                    <span>Per Day Charge :</span>
                    ${element.data.perDayCharge}
                    </div>
                    <div class="my-2">
                    <span>Per 1 km charge :</span>
                    ${element.data.vehicle1kmCharge}
                    </div>
                    <div class="my-2">
                    <span>Policy Types :</span>
                    ${element.data.policyType}
                    </div>
                  </div>
                </div>
                <div class="my-2">
                  <span>Vehicle Remarks</span>
                  <p class="card-text my-1">${element.data.remarks}</p>
                </div>
                <button class="btn btn-primary my-2">Select vehicle</button>
              </div>
            </div>`;
        $("#Vehicle-Details").append(cardData);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}