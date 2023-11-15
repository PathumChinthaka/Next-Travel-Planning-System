$(document).ready(function () {
  getAllPackageDetails();
});

function getAllPackageDetails() {
  $.ajax({
    url: baseURL + "getAll",
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