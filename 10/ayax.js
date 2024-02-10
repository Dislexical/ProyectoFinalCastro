document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("formulario-login");

  
    form.addEventListener("submit", function(event) {
        event.preventDefault();

       
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

       
        if (username === "Juan" && password === "Castro") {
          
            window.location.href = "./creaccion.html";
        } else {
         
            document.getElementById("mensaje").innerText = "Nombre de usuario o contraseña incorrectos";
        }
    });
});