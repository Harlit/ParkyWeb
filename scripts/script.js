function realizarConsulta() {

    const resultadoNombre = document.getElementById('resultadoNombre');
    const resultadoDescripcion = document.getElementById('resultadoDescripcion');
    const resultadoSalario = document.getElementById('resultadoSalario');

    // URL de la API
    const apiUrl = `http://www.parkyapi.somee.com/api/Parqueo/GetParqueos`;

    // Realiza una solicitud GET a la API
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error al realizar la consulta");
            }
        })
        .then(data => {
            // Verifica si se encontraron resultados
            if (data) {
                // Actualiza los elementos HTML con los resultados
                resultadoNombre.textContent = `Nombre: ${data.nombre}`;
                resultadoDescripcion.textContent = `Descripción: ${data.descripcion}`;
                resultadoSalario.textContent = `Salario: ${data.salario}`;
                // Muestra la sección de resultados
                document.querySelector('.resultado').style.display = 'block';
            } else {
                // Si no se encontraron resultados, muestra un mensaje
                resultadoNombre.textContent = "No se encontraron resultados.";
                resultadoDescripcion.textContent = "";
                resultadoSalario.textContent = "";
                // Oculta la sección de resultados
                document.querySelector('.resultado').style.display = 'none';
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}