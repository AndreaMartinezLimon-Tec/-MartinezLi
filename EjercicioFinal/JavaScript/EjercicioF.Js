$(document).ready(function () {
    try {
        $('#Consultar').click(function() {
            swal("Teclee el ID a consultar: ",{
                content: "input",
            })
            .then((parid) => {
                if(parid == null){
                    swal("Error","Favor de ingresar un ID valido", "error"); 
                }
                $.post('PHP/Consultar.php',{par1:parid},function(data){
                    if (data.Nombre == null) {
                        swal("Error", "El ID ingresado no esta asociado a ningun empleado", "error");

                    } else {
                        refrescar(data);
                    }

                    },'json');
            })
        });
    } catch (error) {
        swal("Error", "Ha ocurrido un error al consultar", "error");
    }
    function refrescar(data) {
        console.log(data);
        $('#inputID').val(data.ID);
        $('#inputNombreEmpleado').val(data.Nombre);
        $('#inputAp_Paterno').val(data.Ap_Paterno);
        $('#inputAp_Materno').val(data.Ap_Materno);
        if(data.Estado_Civil == "Soltero"){
            document.getElementById('Soltero').checked = true;
        }
        if(data.Estado_Civil == "Casado"){
            document.getElementById('Casado').checked = true;
        }
        if(data.Estado_Civil == "Otro"){
            document.getElementById('Otro').checked = true;
        }
        $('#Seleccion_Tipo_Empleado').val(data.Tipo_Empleo);
        $('#inputEmail3').val(data.Correo_Per);
        $('#inputTeléfono').val(data.Telefono);
        $('#InputCorreoInsti').val(data.Correo_Emp);
        $('#inputContraseña').val(data.Contrasena);
    }

    $('#Agregar').click(function() {
        try {
            let ID = document.getElementById("inputID").value;
            if (ID != "") {
                swal("Error", "El empleado ya esta registrado", "error");
            } else {
                let Nombre = document.getElementById("inputNombreEmpleado").value;
                let Ap_Paterno = document.getElementById("inputAp_Paterno").value;
                let Ap_Materno = document.getElementById("inputAp_Materno").value;
                let Estado_Civil;
                if(document.getElementById('Soltero').checked == true){
                    Estado_Civil = "Soltero";
                }
                if(document.getElementById('Casado').checked == true){
                    Estado_Civil = "Casado";
                }
                if(document.getElementById('Otro').checked == true){
                    Estado_Civil = "Otro";
                }
                let Tipo_Empleo = document.getElementById("Seleccion_Tipo_Empleado").value;
                if ( document.getElementById("Seleccion_Tipo_Empleado").value == "selected") {
                    Tipo_Empleo = "";
                }
                let Correo_Per = document.getElementById("inputEmail3").value;
                let Telefono = document.getElementById("inputTeléfono").value;
                let Correo_Emp = document.getElementById("InputCorreoInsti").value+"@Alahas.com";
                let Contraseña= document.getElementById("inputContraseña").value;
        
                  if(Nombre == "" || Ap_Paterno == "" || Estado_Civil == "" || Tipo_Empleo == "" ||Correo_Per == "" || Telefono == "" || Correo_Emp == "" || Contraseña == "")
                  {
                        swal("Error", "Favor de no dejar los campos vacíos", "error");
                  }
                  else{
                        $.post('PHP/Agregar.php',{par2:Nombre, par3:Ap_Paterno, par4:Ap_Materno, par5:Estado_Civil, par6:Tipo_Empleo, par7:Correo_Per, par8:Telefono, par9:Correo_Emp,par10:Contraseña},
                        {  
                        },'json');
                        swal("Acción completada", "Se ha agregado correctamente", "success");
                        LimpiarFormulario();
                  }  
            }
            } catch (exception) {
                swal("Error", "Ha ocurrido un error", "error");
            } 
    });

  $('#Modificar').click(function() {
    try {
        let ID = document.getElementById("inputID").value;
        let Nombre = document.getElementById("inputNombreEmpleado").value;
        let Ap_Paterno = document.getElementById("inputAp_Paterno").value;
        let Ap_Materno = document.getElementById("inputAp_Materno").value;
        let Estado_Civil;
        if(document.getElementById('Soltero').checked == true){
            Estado_Civil = "Soltero";
        }
        if(document.getElementById('Casado').checked == true){
            Estado_Civil = "Casado";
        }
        if(document.getElementById('Otro').checked == true){
            Estado_Civil = "Otro";
        }
        let Tipo_Empleo = document.getElementById("Seleccion_Tipo_Empleado").value;
        if ( document.getElementById("Seleccion_Tipo_Empleado").value == "selected") {
            Tipo_Empleo = "";
        }
        let Correo_Per = document.getElementById("inputEmail3").value;
        let Telefono = document.getElementById("inputTeléfono").value;
        let Correo_Emp = document.getElementById("InputCorreoInsti").value;
        let Contraseña= document.getElementById("inputContraseña").value;
        if (ID == null || ID == "") {
            swal("Error", "No es posible modificar un usuario inexistente", "error");
        } else {
            if(Nombre == "" || Ap_Paterno == "" || Estado_Civil == "" || Tipo_Empleo == "" ||Correo_Per == "" || Telefono == "" || Correo_Emp == "" || Contraseña == "")
            {
                  swal("Error", "Favor de no dejar los campos vacíos", "error");
            }
            else{
                  $.post('PHP/Modificar.php',{par1:ID,par2:Nombre, par3:Ap_Paterno, par4:Ap_Materno, par5:Estado_Civil, par6:Tipo_Empleo, par7:Correo_Per, par8:Telefono, par9:Correo_Emp,par10:Contraseña},
                  {  
                  },'json');
                  swal("Acción completada", "Se ha modificado correctamente el empleado", "success");
            } 
        }
    } catch (exception) {
        swal("Error", "Ha ocurrido un error", "error");
    }        
});

$('#Eliminar').click(function(){
    try {
        var ID = document.getElementById("inputID").value;
        if (ID == null || ID == "") {
            swal("Error", "No es posible eliminar un usuario que no existe", "error");
        } else {
            $.post('PHP/Eliminar.php', {par1:ID}, function(data){
                swal("Accion completada", "Se ha eliminado correctamente", "success");
                LimpiarFormulario();
            },'json');            }
    } catch (error) {
        swal("Error", "Ha ocurrido un error", "error");
    }      
    
});
$('#Limpiar').click(function(){
    LimpiarFormulario();
});
    function LimpiarFormulario(){
        $('#inputID').val("");
        $('#inputNombreEmpleado').val("");
        $('#inputAp_Paterno').val("");
        $('#inputAp_Materno').val("");
        document.getElementById('Soltero').checked = true;
        $('#Seleccion_Tipo_Empleado').val("selected");
        $('#inputEmail3').val("");
        $('#inputTeléfono').val("");
        $('#InputCorreoInsti').val("");
        $('#inputContraseña').val("");
    }
});