document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");
    //estamos en la pag 1.
    let pasoActual = 1;

    //barra de progreso:

    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;
        console.log(progreso);
        progressBar.style = `width: ${progreso}%`
    }

    /* Función que pasa a la siguiente pag 
    Oculta la actual y muestra la siguiente*/

    function siguientePaso() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual++;
        if (pasoActual > pasos.length) {
            pasoActual = pasos.length;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }
    /* Función que pasa a la pag anterior 
    Oculta la actual y muestra la anterior.*/

    function pasoAnterior() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual--;
        if (pasoActual < 1) {
            pasoActual = 1;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", siguientePaso);
    });

    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", (e) => e.preventDefault());

    /* Este formulario son 6 páginas que se van mostrando
    y ocultando según pulses los botones.
    En la primera página en el html el botón anterior está
    oculto y en la última el botón siguiente, así nos ahorramos 
    controlar los index out of bound.
    
    Este formulario tiene un inconveniente y es que al ser un único formulario
    los datos no se envían hasta el final así que puedes escribir los datos mal
    y no importa que lo controles en el html porque hasta que no hagas
    submit, no te saldrá error, es decir, te puedes equivocar y 
    darle al botón siguiente sin problemas.
    
    Es por esto que debemos controlar esto de alguna forma en el js.
    */

});
