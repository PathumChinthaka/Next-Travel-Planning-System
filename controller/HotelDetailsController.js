
// $('#hotel-details-tbody').on('click', 'tr', (event) => {
//   alert('hi');
// });

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
      }
    },
    error: function (xhr, status, error) {
      alert("An error occurred: " + error);
    }
  });
});