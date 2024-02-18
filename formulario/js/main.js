document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    //capturar los botones de los pasos:
    const irPag2 = document.getElementById("1a2");
    const irPag3 = document.getElementById("2a3");

    let pasoActual = 1;

    irPag2.addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        let nombreCorrecto = false;
        let apellidosCorrectos = false;
        const regexSoloLetras = /^[a-zA-Z\s]+$/; // Expresión regular para validar solo letras y espacios
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
            document.getElementById("apellidos").style.borderColor = ""; // Restaurar el borde a su estado original si es válido
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
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        let nombreCorrecto = false;
        let apellidosCorrectos = false;
        const regexSoloLetras = /^[a-zA-Z\s]+$/; // Expresión regular para validar solo letras y espacios
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
            document.getElementById("apellidos").style.borderColor = ""; // Restaurar el borde a su estado original si es válido
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