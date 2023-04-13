Prueba de automatización de OpenCart UI mediante Cypress

Prerequisitos:
	- Maquina local con el sistema operativo Ubuntu-Linux
	- IDE VSCode version 2023.1
	- nodeJs V.19.5.0
	- Cypress V.12.9.0

2. Comandos de instalación
** Aqui describiremos los comandos básicos que se necesita ejecutar para tener todas las dependencias instaladas en mi máquina local

	- npm install (descarga todas los package de mi package.json en caso de no estar el repositorio node_modules)
	- npm install cypress --save-dev (descarga el package de cypress)
	- npx cypress open (ejecutar la interfaz de Cypress)

3. Instrucciones para ejecutar los test

	- Abrir el repositorio Cypress_frontEnd_evaluacion
	- Abrir la terminal de VSCode
	- Ejecutar el comando npm install
	- Ejecutar el comando npx cypress open.
	- Se abrirá la interfaz gráfica de Cypress.
	- Seleccionamos la opción E2E TESTING.
	- Seleccionamos el navegador de preferencia (en mi caso uso Chrome).
	- Hacemos clic en el archivo openCart.cy.js.
	- La prueba E2E empezará a ejecutarse.

4. Información adicional
	Los datos que se usan en el formulario estan almacenados en los archivos userData y addressData en formato JSON
	Existe un inconveniente con la velocidad en que carga la página al cambiar de ruta.
	Este bug que se reproduce de manera aleatoria ocurre al momento de direccionarse a otra ruta.
	Al momento que el bug aparece Cypress nos deja el siguiente mensaje:
		"The following error originated from your test code, not from Cypress.
			> pagespeed is not defined
		When Cypress detects uncaught errors originating from your test code it will automatically fail the current test."
	Cypress nos indica que no es problema del codigo sino por fallas internas de la UI
		1.Para tratar de solucionar este bug, se agrega el comando cy.wait() con un tiempo de 5000 ms
		2.Se coloca pageLoadTimeout: 10000 en el archivo Cypress.config
		3.Se indaga en la documentacion de Cypress y se usa el comando Cypress.on() que se encuentra en support/e2e 
		para poder capturar el error y que la prueba no se detenga
	Sin embargo, hay momentos en que el bug detiene la prueba
	Se recomienda hacer un refresh luego de que se visualice el error (> pagespeed is not defined).
	Adicional, dentro del repositorio encontraran un video donde se pudo grabar la ejecucion de la prueba e2e donde se muestra que 
	el proceso si se puede ejecutar de inicio a fin









