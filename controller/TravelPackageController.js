
const PackageNameRegex = /^[a-zA-Z\s]+$/;
const RoomTypeRegex = /^[a-zA-Z\s]+$/;
const TravelAreaRegex = /^[a-zA-Z\s]+$/;
const CategoryRegex = /^[a-zA-Z]+$/;
const regExDaycount = /^[0-9]{1,2}$/;
const descriptionRegex = /^[a-zA-Z0-9\s.,#!&*()-]+$/;
const websiteLinkRegex = /^(http|https):\/\/[A-Za-z0-9\-.]+(\.[A-Za-z]{2,4}){1,2}\/?([A-Za-z0-9\-.\/]*)$/;
const hotelStatusRegex = /^[a-zA-Z\s]+$/;
const googleMapLocationRegex =/^(http|https):\/\/[A-Za-z0-9\-.]+(\.[A-Za-z]{2,4}){1,2}\/?([A-Za-z0-9\-.\/]*)$/;

$("#package_Name").change(function (event) {
  const name = $('#package_Name').val();
  if (PackageNameRegex.test(name)) {
    $("#package_Name").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#package_Name").css('border', '2px solid red');
    alert("Invaid package Name Check again!");
  }
});

$("#package_description").change(function (event) {
  const name = $('#package_description').val();
  if (descriptionRegex.test(name)) {
    $("#package_description").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#package_description").css('border', '2px solid red');
    alert("Invaid package description Check again!");
  }
});

$("#day_Count").change(function (event) {
  const name = $('#day_Count').val();
  if (regExDaycount.test(name)) {
    $("#day_Count").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#day_Count").css('border', '2px solid red');
    alert("Invaid day count Check again!");
  }
});

$("#night_Count").change(function (event) {
  const name = $('#night_Count').val();
  if (regExDaycount.test(name)) {
    $("#night_Count").css('border', '2px solid rgb(222, 226, 230)');
  } else {
    $("#night_Count").css('border', '2px solid red');
    alert("Invaid day count Check again!");
  }
});

// $("#package_video_url").change(function (event) {
//   const name = $('#package_video_url').val();
//   if (websiteLinkRegex.test(name)) {
//     $("#package_video_url").css('border', '2px solid rgb(222, 226, 230)');
//   } else {
//     $("#package_video_url").css('border', '2px solid red');
//     alert("Invaid day count Check again!");
//   }
// });

//return package details object
function packageDetails(){

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

  return packageDetails;
}
//travel package save btn event
$("#package-save-btn").click(function (e) {
  
  //get returned package details obj
  const packageDetailsObj=packageDetails();

  // Create Post Request
  $.ajax({
    url: baseURL + "package/save",
    method: "post",
    data: JSON.stringify(packageDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllPackageDetails();
        clearPackageInputs();
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
                <td class="d-none"> ${element.data.packageId}</td>
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

//update package details event
$("#package-update-btn").click(function (e) {
  
  //get returned package details obj
  const packageDetailsObj=packageDetails();

  $.ajax({
    url: baseURL + "package/update",
    method: "put",
    data: JSON.stringify(packageDetailsObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getAllPackageDetails();
        clearPackageInputs();
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});

//delete package data event
$("#package-delete-btn").click(function (e) {
  const packageId = $('#package_id').val();
  const choice = confirm("Do you want to delete this Data ?");
  if(packageId==""){
    alert("Package Id is Empty");
    return;
  }else if(choice == true){
    $.ajax({
      url: baseURL + "package/" + packageId,
      method: "delete",
      dataType: "json",
      success: function (response) {
        alert(response.message);
      },
      error: function (xhr, status, error) {
        getAllPackageDetails();
        clearPackageInputs();
        alert("Package Deleted Succesfully");
      }
    });
  }else{
    clearPackageInputs();
  }
});

//get selected package table raw
function getSelectedPackageRaw(){
  
  $('#package-tbody').on('click', 'tr', (event) => {
    const packageId = $(event.target).closest('tr').find('td').eq(0).text();
    const packageName = $(event.target).closest('tr').find('td').eq(1).text();
    const packageDescription = $(event.target).closest('tr').find('td').eq(2).text();
    const packageCategory = $(event.target).closest('tr').find('td').eq(3).text();
    const dayCount = $(event.target).closest('tr').find('td').eq(4).text();
    const travelAreas = $(event.target).closest('tr').find('td').eq(6).text();
    const nightCount = $(event.target).closest('tr').find('td').eq(5).text();
    const allowPets = $(event.target).closest('tr').find('td').eq(7).text();
    const packageVideoUrl = $(event.target).closest('tr').find('td').eq(9).text();
    const roomTypes = $(event.target).closest('tr').find('td').eq(8).text();

    $('#package_id').val(packageId.trim());
    $('#package_Name').val(packageName.trim());
    $('#package_description').val(packageDescription.trim());
    $('#package_Category').val(packageCategory.trim());
    $('#day_Count').val(dayCount.trim());
    $('#travel_area_id').val(travelAreas.trim());
    $('#night_Count').val(nightCount.trim());
    $('#pets_Allow').val(allowPets.trim());
    $('#package_video_url').val(packageVideoUrl.trim());
    $('#room_type').val(roomTypes.trim());
  });
}

//get selected table raw
getSelectedPackageRaw();

//clear package input fields
function clearPackageInputs(){
  $('#package_id').val("");
  $('#package_Name').val("");
  $('#package_description').val("");
  $('#package_Category').val("");
  $('#day_Count').val("");
  $('#travel_area_id').val("");
  $('#night_Count').val("");
  $('#pets_Allow').val("");
  $('#package_video_url').val("");
  $('#room_type').val("");
}

//add new package event
$("#btn-add-new-package").click(function (e) { 
  const newPackageId=$('#newPackageID').val();
  const newPackageName=$('#newPackageName').val();
  const hotelPackage=$('#hotel_category').val();

  const newPackageDetails={
    packageCategoryId:newPackageId,
    packageCategoryName:newPackageName,
    hotelCategories:{
      hotelCategoryName:hotelPackage
    }
  }

  console.log(newPackageDetails);
  // Create Post Request
  $.ajax({
    url: baseURL + "package/category",
    method: "post",
    data: JSON.stringify(newPackageDetails),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.code == 200) {
        alert(response.message);
        getExistPackageDetails();
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});

//get exist package
function getExistPackageDetails(){
  $.ajax({
    url: baseURL + "package/getAllcategory",
    method: "GET",
    success: function (response) {
        let Packages=$('#package_Category');
        response.forEach(element => {
            let name=`<option>${element.data.packageCategoryName}</option>`;
            Packages.append(name);
        });
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
}

//load exist package details into selectbar
getExistPackageDetails();