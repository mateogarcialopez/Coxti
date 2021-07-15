# Prueba Coxti

Como se especifico en el documento de la prueba, se desarrollo un panel de información, en el cual los usuarios se pueden registrar, también pueden iniciar sesión con correo electrónico y contraseña y luego poder consultar toda la información que se le solicito en el registro.

También se solicito una API en la cual se ingrese el valor del salario de la persona, donde el sistema debe generar tres posibles respuestas (entre rango de valores) los cuales deben ser siempre aleatorios y donde el valor del salario se debe encontrar entre una de las 3 posibles opciones, para probar esta funcionalidad hay dos opciones:

1.En el panel de Login del panel de información, hay hay un recuadro separado del login que tiene otra pequeña sección donde le solicita al usurio el salario.
2.Realizar la petición en la siguiente ruta `http://localhost:3000/salario/4000000` por medio del navegador ya que es una petición GET o por medio de su programa de testing de API.

El panel de información, esta dividido en dos carpetas "backCoxti" y "frontCoxti", al descargar los proyectos, se debe ingresar a la carpeta raíz de cada uno, y ejecutar el comando `npm install` para instalar todos los paquetes con que los proyectos funcionan, luego para poner en funcionamiento el proyecto "backCoxti"  es necesario ingresar por consola `npm run start` y para poner en funcionamiento el proyecto "frontCoxti" es necesario ingresar por consola `npm run ng serve` o `ng serve` dependiendo del sistema operativo.

Para la base de datos se utilizo MySql, en el  src/db.js que se encuentra en el proyecto "backCoxti" hay un comentario, donde están algunas credenciales que pueden usar para ver información de la base de datos (es una base de datos de prueba en la nube).

Con respecto a las dificultades, mas que todo fue el tiempo, como conté en la llamada que recibí, yo actualmente trabajo en otra empresa, por lo que el tiempo para realizar la prueba no fue el mejor.


