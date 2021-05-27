function validar(){
    var nombre, apellido, cedula, correo, direccion, telefono, expresion;
    
    cobrar = document.getElementById("id_cobrar").value;
    cliente = document.getElementById("id_cliente").value;
    factura = document.getElementById("id_factura").value;
    fecha = document.getElementById("fecha_limite").value;
    cargos = document.getElementById("cargos_demora").value;
    plazo = document.getElementById("plazo_pago").value;
    
    
    if(cobrar === "" || cliente === "" || factura === "" || fecha === "" || cargos === "" || plazo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (cobrar.length>10){
        alert("Datos invalidos");
        return false;
    }
    else if(cliente.length>10){
        alert("Datos invalidos ");
    return false;
    }
    else if(factura.length>10){
        alert("Datos invalidos");
        return false;
    }
    else if(fecha === ""){
        alert("Es obligatorio");
        return false;
    }
    else if(cargos === ""){
        alert("Es obligatorio");
        return false;
    }
    else if(plazo === ""){
        alert("Datos invalidos");
        return false;
    }

    }
    