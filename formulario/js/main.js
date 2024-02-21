document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    //capturar los botones de los pasos:
    const irPag2 = document.getElementById("1a2");
    const irPag3 = document.getElementById("2a3");
    const irPag4 = document.getElementById("3a4");

    let pasoActual = 1;

    ///////    IR A PAG 2   ///////

    
    irPag2.addEventListener("click", () => {

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        let nombreCorrecto = false;
        let apellidosCorrectos = false;
        const regexSoloLetras = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s']+$/; 
        let error1 = '';
        let error2 = '';

        //Validación del nombre:
        if (nombre === '') {
            error1 += 'El campo Nombre es obligatorio.';
            document.getElementById("nombre").style.borderColor = "red";
        } else if (!regexSoloLetras.test(nombre)) {
            error1 += 'Dato no válido.';
            document.getElementById("nombre").style.borderColor = "red";
        } else {
            document.getElementById("nombre").style.borderColor = ""; // Restaurar el borde a su estado original si es válido
            nombreCorrecto = true;
        }

        // Validación de los apellidos
        if (apellidos === '') {
            error2 += 'El campo Apellidos es obligatorio.<br>';
            document.getElementById("apellidos").style.borderColor = "red";
        } else if (!regexSoloLetras.test(apellidos)) {
            error2 += 'Dato no válido.';
            document.getElementById("apellidos").style.borderColor = "red";
        } else {
            document.getElementById("apellidos").style.borderColor = ""; 
            apellidosCorrectos = true;
        }
 
        // Mostrar mensaje de error si lo hay y deshabilitar o habilitar el botón de siguiente
        const mensajeError1 = document.getElementById("error1");
        mensajeError1.innerHTML = error1;
        const mensajeError2 = document.getElementById("error2");
        mensajeError2.innerHTML = error2;

        if(nombreCorrecto && apellidosCorrectos){
            siguientePaso();
        }
    })


    ///////    IR A PAG 3   ///////

    irPag3.addEventListener("click", () => {

        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        let emailCorrecto = false;
        let telefonoCorrecto = false;
        const regexEmail = /^\S+@\S+\.\S+$/;
        const regexTelefono = /^\d{9}$/;
        let error3 = '';
        let error4 = '';

        //Validación del email:
        if (email === '') {
            error3 += 'El campo Email es obligatorio.';
            document.getElementById("email").style.borderColor = "red";
        } else if (!regexEmail.test(email)) {
            error3 += 'Dato no válido.';
            document.getElementById("email").style.borderColor = "red";
        } else {
            document.getElementById("email").style.borderColor = ""; 
            emailCorrecto = true;
        }

        // Validación del teléfono
        if (telefono === '') {
            error4 += 'El campo Teléfono es obligatorio.<br>';
            document.getElementById("telefono").style.borderColor = "red";
        } else if (!regexTelefono.test(telefono)) {
            error4 += 'Dato no válido.';
            document.getElementById("telefono").style.borderColor = "red";
        } else {
            document.getElementById("telefono").style.borderColor = ""; 
            telefonoCorrecto = true;
        }
 
        // Mostrar mensaje de error si lo hay y deshabilitar o habilitar el botón de siguiente
        const mensajeError3 = document.getElementById("error3");
        mensajeError3.innerHTML = error3;
        const mensajeError4 = document.getElementById("error4");
        mensajeError4.innerHTML = error4;

        if(emailCorrecto && telefonoCorrecto){
            siguientePaso();
        }
    })


    ///////    IR A PAG 4   ///////

    irPag4.addEventListener("click", () => {

        const contrasena = document.getElementById("contrasena").value.trim();
        const confirmarContrasena = document.getElementById("confirmarContrasena").value.trim();
        let contrasenaCorrecta = false;
        let confirmarCorrecta = false;
        const regexContrasena = /^\S{8,}$/;
        let error5 = '';
        let error6 = '';
    
        //Validación del contraseña:
        if (contrasena === '') {
            error5 += 'El campo Contraseña es obligatorio.';
            document.getElementById("contrasena").style.borderColor = "red";
        } else if (!regexContrasena.test(contrasena)){
            document.getElementById("contrasena").style.borderColor = "red";
            document.getElementById("texto-contrasena").style.color = "red";
        }else{
            contrasenaCorrecta = true;
        }
    
        // Validación del confirmar Contraseña
        if (confirmarContrasena === '') {
            error6 += 'El campo Confirmar contraseña es obligatorio.';
            document.getElementById("confirmarContrasena").style.borderColor = "red";
        } else if (confirmarContrasena !== contrasena) {
            error6 += 'Las contraseñas no coinciden.';
            document.getElementById("confirmarContrasena").style.borderColor = "red";
        } else {
            confirmarCorrecta = true;
        }
    
        // Mostrar mensaje de error si lo hay y deshabilitar o habilitar el botón de siguiente
        const mensajeError5 = document.getElementById("error5");
        mensajeError5.innerHTML = error5;
        const mensajeError6 = document.getElementById("error6");
        mensajeError6.innerHTML = error6;
    
        if(contrasenaCorrecta && confirmarCorrecta){
            siguientePaso();
        }

    })


    ///////    FINALIZAR FORMULARIO   ///////

    formulario.addEventListener("submit", () => {

        //asegurarse de que todos los campos están rellenos..

        const producto = document.getElementById("producto").value;
        const detalleProducto = document.getElementById("detalleProducto").value;

        // Precio estimado de los productos (inventado para este ejemplo)
        let precioEstimado = 0;
        switch (detalleProducto) {
        case 'iphone':
            precioEstimado = 1199;
            break;
        case 'samsung':
            precioEstimado = 1299;
            break;
        case 'macbook':
            precioEstimado = 1999;
            break;
        case 'dell':
            precioEstimado = 1699;
            break;
        case 'appleWatch':
            precioEstimado = 399;
            break;
        case 'samsungWatch':
            precioEstimado = 349;
            break;
        case 'airpods':
            precioEstimado = 249;
            break;
        case 'sony':
            precioEstimado = 349;
            break;
        }


    });

    //VISUALIZAR CONTRASEÑAS:

    var contrasenaBtn = document.getElementById("contrasenaBtn");
    var confirmarBtn = document.getElementById("confirmarBtn");
    var contrasenaInput = document.getElementById("contrasena");
    var confirmarInput = document.getElementById("confirmarContrasena");

    //Mostrar contraseña:
    contrasenaBtn.addEventListener("click", function() {
        if (contrasenaInput.type === "password") {
            contrasenaInput.type = "text";
            contrasenaBtn.classList.remove('bxs-show');
            contrasenaBtn.classList.add('bxs-hide');
        } else {
            contrasenaInput.type = "password";
            contrasenaBtn.classList.remove('bxs-hide');
            contrasenaBtn.classList.add('bxs-show');
        }
    });

    //Mostrar confirmar contraseña:
    confirmarBtn.addEventListener("click", function() {
        if (confirmarInput.type === "password") {
            confirmarInput.type = "text";
            confirmarBtn.classList.remove('bxs-show');
            confirmarBtn.classList.add('bxs-hide');
        } else {
            confirmarInput.type = "password";
            confirmarBtn.classList.remove('bxs-hide');
            confirmarBtn.classList.add('bxs-show');
        }
    });



    // CAMBIOS DEL SELECT ETC

    const productoSelect = document.getElementById('producto');
    const opcionesProducto = document.getElementById('opcionesProducto');
    const detalleProductoSelect = document.getElementById('detalleProducto');

    productoSelect.addEventListener('change', function() {

        const productoSeleccionado = productoSelect.value;
    
        // Limpiar opciones anteriores
        detalleProductoSelect.innerHTML = '<option disabled selected>Elija el producto:</option>';
    
        switch (productoSeleccionado) {
          case 'smartphone':
            addOption(detalleProductoSelect, 'iphone', 'iPhone 13 Pro');
            addOption(detalleProductoSelect, 'samsung', 'Samsung Galaxy S22 Ultra');
            break;
          case 'laptop':
            addOption(detalleProductoSelect, 'macbook', 'MacBook Pro M1 Pro');
            addOption(detalleProductoSelect, 'dell', 'Dell XPS 15');
            break;
          case 'smartwatch':
            addOption(detalleProductoSelect, 'appleWatch', 'Apple Watch Series 7');
            addOption(detalleProductoSelect, 'samsungWatch', 'Samsung Galaxy Watch 4');
            break;
          case 'auriculares':
            addOption(detalleProductoSelect, 'airpods', 'AirPods Pro');
            addOption(detalleProductoSelect, 'sony', 'Sony WH-1000XM4');
            break;
          default:
            // Si no se ha seleccionado un producto, ocultar el selector de opciones
            opcionesProducto.style.display = 'none';
            return;
        }
    
        // Mostrar el selector de opciones si se ha seleccionado un producto
        detalleProducto.style.display = 'block';
        //opcionesProducto.style.width = '100%';
    });


    // Función auxiliar para añadir opciones al select
    function addOption(select, value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        select.add(option);
    }



    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;
        console.log(progreso);
        progressBar.style = `width: ${progreso}%`
    }
    
    function siguientePaso() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual++;
        if (pasoActual > pasos.length) {
            pasoActual = pasos.length;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    function pasoAnterior() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual--;
        if (pasoActual < 1) {
            pasoActual = 1;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }


    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", (e) => e.preventDefault());
});