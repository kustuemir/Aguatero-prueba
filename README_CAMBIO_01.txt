CAMBIO 01 - CARGAR CLIENTES

Problema encontrado:
app.js intentaba agregar un evento al elemento #btnAgregar, pero ese botón ya no existe en index.html. Eso producía un TypeError al cargar el script y detenía la ejecución de todo el código que venía después, incluyendo guardarCliente() y muchas funciones de la aplicación.

Corrección:
Se hizo el listener seguro: solo se agrega si #btnAgregar existe. El botón actual #btnAgregarTop sigue conectado a abrirModalNuevoCliente().

No se modificaron otras funciones en esta prueba.
