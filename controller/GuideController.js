//server URL
var baseURL = "http://localhost:8085/NextTravel/api/guide/";

//Key Events
$('#guide-save-btn').click(function (e) {

  //Get guideDetails
  const guidId = $('#guid_Id').val();
  const name = $('#guide_name').val();
  const guidAddress = $('#guidAddress').val();
  const age = $('#age').val();
  const gender = $('#gender').val();
  const contact = $('#contact').val();
  const guideExperience = $('#experiences').val();
  const dayValue = $('#day_value').val();
  const remarks = $('#remark').val();
  const policyId = $('#can_policy').val();

  //Create guide details object
  let guideObj = {
    guidId: guidId,
    guidName: name,
    address: guidAddress,
    age: age,
    gender: gender,
    contact: contact,
    experience: guideExperience,
    dayValue: dayValue,
    remarks: remarks,
    policyId: policyId
  };

  // Create Post Request
  $.ajax({
    url: baseURL + "save",
    method: "post",
    data: JSON.stringify(guideObj),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      alert(response.message);
    },
    error: function (error) {
      var jsObject = JSON.parse(error.responseText);
      alert(jsObject.message);
    }
  });
});
