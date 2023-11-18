function mostrarContenidos() {
    // Obtener la URL del cuadro de texto
    var url = document.getElementById("urlInput").value;

    // Verificar si se proporcionó una URL
    if (!url) {
        alert("Por favor, introduce una URL.");
        return;
    }

    // Mostrar el estado "cargando" mientras se realiza la petición
    document.getElementById("estados").innerHTML = "Estado de la petición: Cargando...";

    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud AJAX
    xhr.open("GET", url, true);

    // Configurar la función de retorno de llamada cuando la solicitud se completa
    xhr.addEventListener("load", function () {
        // Mostrar el contenido de la respuesta en la zona de Contenidos
        document.getElementById("contenidos").innerHTML = xhr.responseText;

        // Mostrar el estado de la petición en la zona de Estados
        document.getElementById("estados").innerHTML = "Estado de la petición: " + xhr.status + " " + xhr.statusText;

        // Mostrar las cabeceras HTTP en la zona de Cabeceras HTTP
        document.getElementById("cabeceras").innerHTML = "Cabeceras HTTP: " + xhr.getAllResponseHeaders();

        // Mostrar el código de estado en la zona de Código de estado
        document.getElementById("codigoEstado").innerHTML = "Código de estado: " + xhr.status;

        // Eliminar el mensaje de "Cargando..." una vez que la petición se completa
        document.getElementById("estados").innerHTML = "";
    });

    // Configurar la función de retorno de llamada para gestionar errores
    xhr.addEventListener("error", function () {
        // Mostrar un mensaje de error en la zona de Estados
        document.getElementById("estados").innerHTML = "Hubo un error al realizar la petición. Detalles: " + xhr.statusText;

        // Eliminar el mensaje de "Cargando..." en caso de error
        document.getElementById("estados").innerHTML = "";
    });

    // Realizar la petición AJAX
    xhr.send();
}



