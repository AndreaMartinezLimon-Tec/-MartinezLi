## **Modelo de caja.**
---
***Andrea Joana Martínez Limón 19100212.***

El modelo de caja también conocido como “Box Model” es una de las características más importantes de HTML y CSS ya que es la forma en la que se representan todos los elementos en una página web. Este modelo hace que todos los elementos utilizados se representen mediante cajas rectangulares.

<img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/modelo-caja-css-t1.jpg" width="35%" height="35%" />

Cada que se inserta una etiqueta HTML se crea automáticamente una caja rectangular que abarca el contenido de ese elemento. Otra forma de crear una caja es la etiqueta *div* que se utiliza normalmente para agrupar ciertos elementos y poder aplicar un estilo general en ellos.

Sin importar la forma en que se creo la caja, de manera predeterminada estas no serán visibles a simple vista ya que no cuentan con color de borde o de fondo que las distinga, pero gracias a CSS es que podemos modificar estas características utilizando diversas propiedades como lo son: width, height, padding, margin, border y background.

+ **Width:** Controla la anchura de la caja, no admite valores negativos y cuando se define en porcentajes se calcula a partir de un elemento padre (si es que lo tiene) o el navegador lo calcula de acuerdo a la pantalla. Con las variantes Max-width y Min-width es posible definir valores máximos y mínimos para la anchura.

+ **Height:** Es parecido a width con la diferencia de que controla la altura de la caja. Si bien también es posible definir un valor máximo y uno mínimo (con las propiedades Max-height y Min-height) generalmente se deja que tome la altura de acuerdo al contenido de la caja.

+ **Margin:** Una propiedad para poder establecer el mismo margen en los cuatro lados de la caja, sin embargo, CSS también cuenta con las propiedades para controlar cada uno de los márgenes horizontales y verticales de un elemento (margin-top, margin-right, margin-bottom, margin-left). Estas propiedades se usan para establecer la separación entre el borde de la cada y el resto de las cajas adyacentes siendo los pixeles, los em y los porcentajes las unidades más utilizadas para calcular esta separación.

+ **Padding:** Establece el tamaño del espacio de relleno en todos los lados del elemento, no permite valores negativos y al igual que margin existen propiedades para poder modificar cada uno de los espacios de relleno horizontales y verticales (padding-top, padding-right, padding-bottom, padding-left).

+ **Border:** Permite modificar el aspecto de los bordes de una caja. Como es posible definirle a cada borde un tipo diferente de color, estilo, grosor y anchura CSS posee 20 propiedades relacionadas con los bordes.
  
+ **Background:** Se utiliza para definir de manera sencilla el fonde una caja, acepta tanto colores como imágenes de fondo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Modelo_de_caja.svg/2560px-Modelo_de_caja.svg.png" width="35%" height="35%" />

Como se puede notar, una caja esta conformada por distintas partes que se sobreponen unas con otras. Un usuario normal visualiza estas partes acomodadas de la siguiente forma.

+ **Contenido(content):** se trata del contenido dentro del elemento HTML (las palabras que contiene un párrafo).
  
+ **Relleno (padding):** El espacio que existe entre el contenido y el borde.
Borde (border): La línea que encierra por completo el contenido y el relleno.
Imagen de fondo (background image): Una imagen dentro del borde que se muestra detrás del contenido y el relleno.

+ **Color de fondo (background color):** Color que se muestra detrás del contenido y el relleno. Si hay una imagen seleccionada como imagen de fondo y esta no llega hasta los bordes se mostrará el color de fondo.

+ **Margen (margin):** La separación que existe entre una caja y otra.

<img src="https://uniwebsidad.com/static/libros/imagenes/css/f0403.gif" width="25%" height="25%" />

Las cajas tanto automáticas como creadas con la etiqueta *div* se pueden posicionar de varias maneras:

+ **Flujo normal:** Las cajas se colocan verticalmente una sobre la otra.
  
+ **Flotante:** Cuando se le asigna a una caja la propiedad float produce que la caja se mueva hacia la izquierda o derecha tanto como sea posible mientras otro contenido u otra caja ocupan el lugar que le pertenecía anteriormente (a no ser que lo impidamos con la propiedad clear). Las cajas no posicionadas anteriores y posteriores a la caja flotante fluyen verticalmente como si el flotante no existiera.
  
+ **Posicionada:** Una caja con la propiedad position establecida en absolute o relative sale del flujo normal vertical y establece un nuevo bloque de contención para los hijos. A veces puede pasar que otras cajas no posicionadas se superpongan por lo que es necesario establecer el orden en el que están apiladas. Para posicionar una caja se usan las propiedades top, bottom, left y right, El posicionamiento puede ser:
    + **Absoluto:** Se sale del flujo normal y se le asigna una posición con respecto al bloque de contención padre más cercano que esté posicionado, ya sea absoluto o relativo. Si ningún bloque de contención padre está posicionado tomará como referencia el body.
  
    + **Relativo:** Sale del flujo normal y ocupa una posición relativa a la que le hubiera correspondido en el flujo normal.
