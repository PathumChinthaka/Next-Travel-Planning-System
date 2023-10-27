
//travel package save btn event
$("#package-save-btn").click(function (e) {
  const packageId = $('#package_id').val();
  const packageName = $('#package_Name').val();
  const packagedescription = $('#package_description').val();
  const packageCategory = $('#package_Category').val();
  const dayCount = $('#day_Count').val();
  const travelAreaId = $('#travel_area_id').val();
  const nightCount = $('#night_Count').val();
  const petsAllow = $('#pets_Allow').val();
  const packageVideoUrl = $('#package_video_url').val();
  const roomType = $('#room_type').val();

  const packageDetails = {
    packageId: packageId,
    packageName: packageName,
    packageDescription: packagedescription,
    packageCategory: packageCategory,
    dayCount: dayCount,
    travelAreas: travelAreaId,
    nightCount: nightCount,
    allowPets: petsAllow,
    roomTypes: roomType,
    travelPackageVideoUrl: packageVideoUrl
  }

  // Create Post Request
  $.ajax({
    url: baseURL + "package/save",
    method: "post",
    data: JSON.stringify(packageDetails),
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
});

//get all package details
function getAllPackageDetails() {
  $.ajax({
    url: baseURL + "package/getAll",
    method: "GET",
    success: function (response) {
      $("#package-table tbody").empty();
      response.forEach(element => {
        let rawData = `<tr>
                <td> ${element.data.packageId}</td>
                <td>${element.data.packageName}</td>
                <td> ${element.data.packageDescription}</td>
                <td> ${element.data.packageCategory}</td>
                <td> ${element.data.dayCount}</td>
                <td> ${element.data.nightCount}</td>
                <td> ${element.data.travelAreas}</td>
                <td> ${element.data.allowPets}</td>
                <td> ${element.data.roomTypes}</td>
                <td> ${element.data.travelPackageVideoUrl}</td>
                </tr>`;
        $("#package-table tbody").append(rawData);
      });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

//get all packages globally called
getAllPackageDetails();