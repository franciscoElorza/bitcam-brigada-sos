// Mostrar y ocultar password para login
function mostrarPassword(){
  var cambio = document.getElementById("inputPassword");
  if(cambio.type == "password"){
    cambio.type = "text";
    $('.icon').removeClass('fas fa-eye-slash').addClass('fas fa-eye');
  }else{
    cambio.type = "password";
    $('.icon').removeClass('fas fa-eye').addClass('fas fa-eye-slash');
  }
}

