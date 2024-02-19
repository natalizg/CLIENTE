document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    //capturar los botones de los pasos:
    const irPag2 = document.getElementById("1a2");
    const irPag3 = document.getElementById("2a3");
    const irPag4 = document.getElementById("3a4");

    let pasoActual = 1;

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

    irPag4.addEventListener("click", () => {
        const contrasena = document.getElementById("contrasena").value.trim();
        const confirmarContrasena = document.getElementById("confirmarContrasena").value.trim();
        let contrasenaCorrecta = false;
        let confirmarCorrecta = false;
        const regexContrasena = /^[^\s]{8}$/;
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

    /*botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", siguientePaso);
    });
    */

    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", (e) => e.preventDefault());
});