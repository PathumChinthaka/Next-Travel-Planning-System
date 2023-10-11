export class TravelerRegisterController{

  constructor(){
    $('#register-btn').on('click', () => {
      this.travelerRegisterData();
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
    console.log(travelerObj);
    return travelerObj;
  }
}
new TravelerRegisterController();