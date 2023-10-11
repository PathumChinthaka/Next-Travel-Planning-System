export class TravelerRegisterController{

  constructor(){
    $('#register-btn').on('click', () => {
      this.saveRegisterData();
    });
  }

  travelerRegisterData(){
    const travelerObj=JSON.stringify({
      name:$('#travelerName').val(),
      address:$('#address').val(),
      nic:$('#userNic').val(),
      email:$('#userEmail').val(),
      password:$('#Password').val()
    })
    return travelerObj;
  }

  saveRegisterData(){
    const registerData=this.travelerRegisterData();

    $.ajax({
      url: "http://localhost:8080/nextTravel/api/v1/save",
      type: "POST",
      data: registerData,
      dataType: "json",
      headers: {
        "Content-Type": "application/json"
      },
      success: (response) => {
        console.log("i came");
        console.log(response);
      },
      error: (message) => {
        console.log(message);
      }
    });
  }
}
new TravelerRegisterController();