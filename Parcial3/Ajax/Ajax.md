## **Ajax.**
---
***Alumna: Andrea Joana Martínez Limón 19100212.***

Se le denomina Ajax (Asynchronous JavaScript and XML) a un grupo de tecnologías que se utilizan para desarrollar aplicaciones web, cuando se implementan este tipo de tecnologías el usuario puede interactuar con las páginas web sin verse interrumpidos por la recarga del sitio.

<img src="https://www.epitech-it.es/wp-content/uploads/2022/02/ajax-1.jpg" width="25%" height="25%" />

Ajax está conformado por las siguientes tecnologías:
- **XHTML y CSS:** Permiten presentar la información.
- **DOM (Document Object Model que se traduce como Modelo de Objetos de Documento):** Se utiliza para visualizar e interactuar de forma dinámica con la información presentada.
- **Objeto XMLHttpRequest:** Sirve para manipular los datos de forma asíncrona con el servidor web.
- **XML, HTML y XSLT:** Son utilizados en el intercambio y la manipulación de datos.
- **JavaScript:** Enlaza las solicitudes y la información de datos.

<img src="https://uniwebsidad.com/static/libros/imagenes/ajax/f0101.gif" width="35%"/>

#### ¿Cómo funciona Ajax?
Cuando un usuario utiliza PHP u otro lenguaje para comunicarse con un servidor, lo que realmente esta sucediendo es que esta haciendo una petición para que el servidor devuelva una respuesta. Al utilizar una aplicación web tradicional el usuario no puede interactuar con la pagina mientras dure este proceso. Sin embargo, al usar Ajax la página no quedará esperando la respuesta, si no que permitirá al usuario seguir realizando tareas mientras espera que el servidor responda en un determinado tiempo. 
AJAX agiliza los procesos de respuesta utilizando la transmisión de datos en segundo plano (preparación un paquete de datos), de esta forma evita que la página se cargue nuevamente. Además, hace uso de Javascript para poder modificar los el contenido mostrado al usuario de manera rápida y dinámica.

#### Comparación de envio y recepción datos.

***Tradicional.***| ***Ajax.***|
----|-----|
El usuario envía una solicitud HTTP desde el navegador web al servidor.|El navegador crea una llamada de JavaScript que activa el XMLHttpRequest.
El servidor recibe la solicitud y recupera los datos necesarios para enviarlos al navegador web.|En segundo plano, el navegador crea una solicitud HTTP al servidor.
El navegador recibe esta información y vuelve a cargar la página.|El servidor recibe, recupera y envía los datos al navegador.
El usuario debe esperar hasta que se complete todo el proceso para poder realizar otras tareas.|El navegador recibe los datos y estos se reflejan directamente en la página, sin necesidad que el usuario la recargue.

<img src="https://www.researchgate.net/profile/Roberto-Jacome/publication/301301481/figure/fig13/AS:351193097359361@1460742367358/Figura-314-Modelos-Web-tradicionales-vs-Modelos-Web-con-AJAX-Las-peticiones-mas-simples.png"  width="35%"/>

#### Limitaciones.

Aunque Ajax esta diseñado para que las páginas web sean más receptivas e interactivas con los usuarios, tiene algunas limitaciones como lo son:
- **Soporte de navegador:** No todos los navegadores admiten JavaScript o XMLHttpRequest. 
- **Seguridad y privacidad de usuario:** La ejecución de aplicaciones JavaScript puede suponer un riesgo para el usuario al permitir su ejecución. Por este motivo es necesario tener en cuenta los problemas relacionados con la seguridad del usuario a la hora de desarrollar una aplicación Ajax.
- **Accesibilidad:** Ya que no todos los navegadores disponen de soporte para JavaScript o XMLHttpRequest, el desarrollador debe asegurarse o al menos intentar que la aplicación sea accesible para todos los usuarios.
- **Motor de búsqueda:** No es posible realizar búsquedas en aplicaciones Ajax; sin embargo, es posible utilizar sus características y elementos en una aplicación donde si se puedan realizar búsquelas.

#### Algunos ejemplos.

- **Sistemas de votación y calificación:** Ambas operaciones hacen uso de Ajax ya que, al hacer clic en el botón correspondiente, el sitio web actualizará tanto los datos como gráficas relacionadas, pero la página en general permanecerá sin cambios.

- **Salas de chat:** Algunos sitios web tienen un chat incorporado en su página principal, mediante el cual es posible hablar un agente de atención al cliente. Gracias a Ajax no es necesario volver a cargar la página cada vez que se envíen o reciban mensajes a través de este método.

A pesar de sus limitaciones el uso de Ajax nos facilita las funciones multitareas, por lo que es importante considerar su uso a la hora de realizar sitios web.
