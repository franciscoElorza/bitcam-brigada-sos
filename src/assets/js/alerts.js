
// $('button').click(function(){
//     $('.alert').removeClass("ocultar");
//     $('.alert').addClass("mostrar");
//     // $('.alert').addClass("mostrarAlert");
//     setTimeout(function(){
//         $('.alert').addClass("ocultar");
//         $('.alert').removeClass("mostrar");
//     },5000);
// });

// $('.close-btn').click(function(){
//     $('.alert').addClass("ocultar");
//     $('.alert').removeClass("mostrar");
// });

// ALERT LOGIN
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('La cuenta no existe o ingreso datos erroneos!', 'danger')
  })

  function actualizar(){
    setTimeout("document.location= document.location", 2000);
}

}

// ALERT REGISTRO