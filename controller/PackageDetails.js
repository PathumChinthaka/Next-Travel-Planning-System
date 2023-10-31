function packageDetails(){

  const packageName = $('#package_Name').val();
  const packagedescription = $('#package_description').val();
  const packageCategory = $('#package_Category').val();
  const travelAreaId = $('#travel_area_id').val();
  const packageVideoUrl = $('#package_video_url').val();
  const roomType = $('#room_type').val();
  const HotelCategory = $('#Hotel_Category').val();
  const HotelName = $('#Hotel_Name').val();
  const hotelCharge = $('#hotel_charge').val();
  const HotelDescription = $('#Hotel_Description').val();
  const hotelDiscount = $('#hotel_Discount').val();
  const VehicleCategory = $('#Vehicle_Category').val();
  const VehicleName = $('#Vehicle_Name').val();

  const packageObj={
    packageId:"",
    packageName:packageName,
    packageDescription:packagedescription,
    packageCategory:packageCategory,
    hotelCategory:HotelCategory,
    hotelName:HotelName,
    hotelCharge:hotelCharge,
    hotelDescription:HotelDescription,
    hotelDiscount:hotelDiscount,
    vehicleCategory:VehicleCategory,
    vehicleName:VehicleName,
    travelAreas:travelAreaId,
    roomTypes:roomType,
    travelPackageVideoUrl:packageVideoUrl
  }
  return packageObj;
}

$("#package-save-btn").click(function (e) {
  
  //get returned package details obj
  const packageDetailsObj=packageDetails();

  console.log(packageDetailsObj);

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
// getExistPackageDetails();

