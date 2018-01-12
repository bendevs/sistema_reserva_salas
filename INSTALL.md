
1.- Software requerido

Se pueden descargar desde las paginas de referencia citadas en el punto 1.2.

nodejs 6.10.0 o superior.
npm 3.10.10 o superior.
angular/cli 1.0.0.

1.2.- Procedimiento de Instalacion

Los procedimientos listados en esta seccion son para realizar una instalacion de primera instancia, lo que quiere decir que no exista versiones diferenes de los programas mensionados instaladas en el sistema operativo.

intalar primeramente nodejs con los siguientes comandos (Se recomienda realizar un apt-get update primero, para evitar problemas) Referencia https://nodejs.org/en/download/package-manager/

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

npm se instalara junto con nodejs.

Instalar angular/cli con los siguientes comandos, referencia https://angular.io/docs/ts/latest/cli-quickstart.html

npm install -g @angular/cli

Adicionalmente se puede comprobar las instalaciones realizadas con los siguientes comandos:

node -v (Se muestra la version de node).
npm -v (Se muestra la version de npm).
ng version (Se muestra la version de angular cli).

Hasta este punto angular debio instalarse correctamente.

SERVICIOS:

- Iniciar Servicios del Proyecto:

Servicio Login

1. Crear un base de datos en un entorno postgres llamada “login”.
2. Ejecutar el script “script_loga2” (angular2-proy/servicios_angular_2/Servicio Login/loga2) usando la base de datos login.
3. Copiar el archivo “APIRestA” en el escritorio (/angular2-proy/servicios_angular_2/Servicio Login/APIRestA).
4. Abrir la carpeta desde el terminal (click derecho -> abrir desde el terminal) y ejecutar el comando ‘node server.js’ sin comillas simples.
5. Si se requiere configurar algunos datos para arrancar el servicio (puerto, contrasenia, usuario, etc)  puede configurar el archivo “connectionIf.js” que esta dentro la carpeta “APIRestA” (/APIRestA/app/connection/connectionIf.js).

Servicio Reservas

1. Crear un base de datos en un entorno postgres llamada “reservas”.
2. Restaurar la base de datos “reservas” (angular2-proy/servicios_angular_2/Servicio Reservas/reservas) usando la base de datos reservas.
3. Copiar el archivo “APIRestA” en el escritorio (/angular2-proy/servicios_angular_2/Servicio Reservas/APIRestA).
4. Abrir la carpeta desde el terminal (click derecho -> abrir desde el terminal) y ejecutar el comando ‘node server.js’ sin comillas simples.
5. Si se requiere configurar algunos datos para arrancar el servicio (puerto, contrasenia, usuario, etc)  puede configurar el archivo “connectionIf.js” que esta dentro la carpeta “APIRestA” (/APIRestA/app/connection/connectionIf.js).
