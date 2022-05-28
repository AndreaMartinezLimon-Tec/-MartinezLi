$(document).ready(function() {
    $('#ConsultaBD').click(function() {
        let parid=prompt("Teclee el ID a consultar");

        $.post('PHP/RegistroBD.php',{par:parid},function(data){
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