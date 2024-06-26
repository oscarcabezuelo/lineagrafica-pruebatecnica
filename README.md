# Prueba técnica para Lineagráfica (Oscar Cabezuelo)

**NOTA:** Este proyecto está realizado con React. Para ejectutar y visualizar este proyecto, debes seguir estos pasos:

1. Tener npm instalado. 
2. Una vez instalado, abre la carpeta base del proyecto con la terminal y ejecuta el comando ***npm install*** para instalar las dependencias.
3. Cuando se hayan instalado las dependencias, ejecuta el comando ***npm run dev*** para ejecutar el proyecto. 
4. Debería de estar ejecutándose el proyecto. Para ver el proyecto, copia la url que te muestra la terminal en el apartado **Local**. Será *localhost* más el número de puerto.

## EL PROYECTO:

- Tiempo de elaboración: 10 minutos conexión al endponint, 25 - 30 minutos diseño de la vista de productos, 5 minutos este readme.
- Elaborado con: React, Javascript, CSS, HTML.

Este proyecto se basa en conectar con la API de prueba que me proporcionasteis, primeramente autenticarse y mediante el token que se recibe una vez autenticado, usarlo para obtener unos productos de prueba. Con esos productos de prueba, se debe realizar un listado de productos responsive, con dos posibles vistas: una de rejilla (o grid) y otra de lista. Se podrán intercambiar las vistas como el autor desee.

## MI PUNTO DE VISTA Y COMO HE REALIZADO EL PROYECTO:

He decidido usar React dentro del proyecto. Esto se debe a que me considero un buen desarrollador front-end de React, y prefiero hacer mis proyectos personales desde React a ser posible. No entraré demasiado dentro de la estructura de React, pero he usado el *hook* ***useEffect*** para la llamada con el endpoint, y dos componentes para separar la estructura: ***Product*** para cada producto y ***Buttons*** para la estructura de botones para los cambios de vistas

Para conectar con el endpoint de la API, he usado *axios*, que es una librería de JavaScript para manejar promesas y HTTP requests. Es bastante parecido a *fetch*, pero yo siempre he utilizado más *axios* en mis proyectos o trabajos.

Para los cambios de vistas he usado dos botones, uno para la lista y otro para el *grid*. En este caso está hecho con funciones de JavaScript puras, mediante el uso del acceso al DOM con ***document.getElementById(format)***, donde *format* es el valor de la clase que queremos poner según el botón que pulsemos. En este caso para la rejilla se usa la clase *grid* y para la lista *list*. Dentro de la función se hace una comprobación para saber en qué botón se hace click, y el div donde se almacenan los prodcutos cambia de clase dependiendo del botón pulsado. La vista por defecto es la de lista. 

Respecto a diseño y los colores usados, el diseño he querido haciendo esforzandome un poco sin dejar de ser un diseño básico, ya que me gusta bastante esforzarme en el diseño de mis proyectos, aunque tampoco he querido tirarme 1-2 horas. Los colores que he usado para los nombres de los productos han sido porque los colores de la imagen son parecidos, nada más.

Cualquier duda sobre la prueba puedes contactar conmigo por email o LinkedIn y te puedo comentar porqué he hecho una cosa o otra.

¡Muchas gracias por el tiempo empleado en ver esta prueba técnica! 
