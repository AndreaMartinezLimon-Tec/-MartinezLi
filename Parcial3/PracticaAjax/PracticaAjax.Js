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
    
    } 