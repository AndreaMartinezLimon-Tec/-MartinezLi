$(document).ready(function() {
    $('#Registrar').click(function() {
        $.post('Registro.php',{},function(data){

              console.log(data);
              $('#inputNombreEmpleado').val(data.inputNombreEmpleado);
              $('#inputAp_Paterno').val(data.inputAp_Paterno);
              $('#inputAp_Materno').val(data.inputAp_Materno);
              $('#inputEmail3').val(data.inputEmail3);
              $('#inputTeléfono').val(data.inputTeléfono);
              $('#InputCorreoInsti').val(data.InputCorreoInsti);
              $('#inputContraseña').val(data.inputContraseña);

          },'json');
    });
});

$(document).ready(function() {
    //Metodo json fetch
    document.getElementById("JsonFetch").addEventListener("click", function(){

    
        let promesa  = fetch('Registro.php');
         promesa.then( respuesta => respuesta.json() )
                .then( data => {
                    $('#inputNombreEmpleado').val(data.inputNombreEmpleado);
                    $('#inputAp_Paterno').val(data.inputAp_Paterno);
                    $('#inputAp_Materno').val(data.inputAp_Materno);
                    $('#inputEmail3').val(data.inputEmail3);
                    $('#inputTeléfono').val(data.inputTeléfono);
                    $('#InputCorreoInsti').val(data.InputCorreoInsti);
                    $('#inputContraseña').val(data.inputContraseña);
                });
    });
    
    
    });

window.onload = function() {
    //Mostrar la fecha actual
    document.getElementById("Ajax").addEventListener("click",MostrarFecha);
    function MostrarFecha() {
    
    var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
    
    solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                                // cuando cambie el status del objeto XMLHttpRequest
    
        if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
            document.getElementById("Fecha").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
    }};
    
    solicitud.open("GET", "PracticaAjax.php", true);
    solicitud.send();
    
     }
    
$('#AjaxPromise').click(function(){
    let Promesa = new Promise (function(resolve,reject){
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange=function(){
            if (solicitud.readyState == 4 && solicitud.status == 200) {
                resolve(solicitud.responseText);
            }};
            solicitud.open("GET", "PracticaAjax.php", true);
            solicitud.send();
        });
        Promesa.then(function(value) {document.getElementById("Fecha").innerHTML = value;});
});
}

$(document).ready(function() {
    $('#ConsultaBD').click(function() {
        let parid=prompt("Teclee el ID a consultar");

        $.post('RegistroBD.php',{par:parid},function(data){
            console.log(data);
            $('#inputNombreEmpleado').val(data.Nombre);
            $('#inputAp_Paterno').val(data.Ap_Paterno);
            $('#inputAp_Materno').val(data.Ap_Materno);
            $('#inputEmail3').val(data.Correo_Per);
            $('#inputTeléfono').val(data.Telefono);
            $('#InputCorreoInsti').val(data.Correo_Emp);
            $('#inputContraseña').val(data.Contraseña);
          },'json');
    });
});