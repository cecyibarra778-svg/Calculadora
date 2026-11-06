// Selecciona el formulario y el espacio para el resultado
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

// EVENTO: se ejecuta cuando el usuario envía el formulario
formulario.addEventListener("submit", function(event) {

    // Evita que el navegador recargue la página
    event.preventDefault();

    // Obtiene los valores introducidos en los campos
    const peso = Number(document.querySelector("#peso").value);
    const estatura = Number(document.querySelector("#estatura").value);

    // CONDICIÓN: comprueba que los datos sean válidos
    if (peso <= 0 || estatura <= 0 || estatura > 3) {
        alert("Introduce un peso y una estatura válidos.");
        return;
    }

    // OPERACIÓN: calcula el índice de masa corporal
    const imc = peso / (estatura * estatura);

    // Muestra el resultado dentro del HTML
    resultado.textContent = "Tu IMC es: " + imc.toFixed(2);
});