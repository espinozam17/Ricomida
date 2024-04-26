$(document).ready(function(){
   
   $("#enviarCorreo").click( function(){
    alert("el correo fue en enviado correctamente")
   })

   $("h1").on( "dblclick" , function(){
    $(this).css({"color": "red"})
  });

  $('.card-title').click(function(){
    $('.text-secundary').toggle();
  });
  
  });

   

  

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))