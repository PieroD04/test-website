const nombres = document.getElementById("form-nombres");
const apellidos = document.getElementById("form-apellidos");
const mensaje = document.getElementById("form-mensaje");
const advertencia = document.getElementById("form-advertencia");

function ValidarCorreo(correo) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value))
  {
    return (true)
  }
    return (false)
}

const form = document.getElementById("form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    if(nombres.value.length < 1){
        advertencia.textContent = "Nombre inválido: Nombre muy corto.";
        advertencia.style.display = "block";
    }
    else if(apellidos.value.length < 5){
        advertencia.textContent = "Apellidos inválido: Coloque ambos apellidos.";
        advertencia.style.display = "block";
    }
    else if(mensaje.value.length < 15){
        advertencia.textContent = "Mensaje inválido: Mensaje muy corto. Se detallado con tu consulta.";
        advertencia.style.display = "block";
    }
    else{
        advertencia.style.display = "none";
        alert("¡Gracias por contactarnos! Te responderemos al correo lo más pronto posible.");
    }
})