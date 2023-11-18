function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}

// Función para detectar si la cadena es un palíndromo
function esPalindromo() {
    var palabra = prompt("Ingresa una cadena:");

    if (palabra !== null && palabra !== "") {
        var reverso = palabra.split('').reverse().join('');
        var resultado = document.getElementById("resultado");

        if (palabra === reverso) {
            resultado.innerHTML = "La cadena es un palíndromo.";
        } else {
            resultado.innerHTML = "La cadena no es un palíndromo.";
        }
    } else {
        alert("Por favor, ingresa una cadena válida.");
    }
}

// Función para comparar dos números y mostrar el mayor
function mostrarMayor() {
    var num1 = prompt("Ingresa el primer número:");
    var num2 = prompt("Ingresa el segundo número:");

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = document.getElementById("resultado");

        var mayor = Math.max(parseFloat(num1), parseFloat(num2));
        resultado.innerHTML = "El número mayor es: " + mayor;
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}

// Función para mostrar las vocales de una frase
function mostrarVocales() {
    var frase = prompt("Ingresa una frase:");

    if (frase !== null && frase !== "") {
        var vocales = frase.match(/[aeiou]/gi);
        var resultado = document.getElementById("resultado");

        if (vocales) {
            resultado.innerHTML = "Las vocales en la frase son: " + vocales.join(', ');
        } else {
            resultado.innerHTML = "No se encontraron vocales en la frase.";
        }
    } else {
        alert("Por favor, ingresa una frase válida.");
    }
}
// Función para limpiar resultados
function limpiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el contenido del contenedor
}