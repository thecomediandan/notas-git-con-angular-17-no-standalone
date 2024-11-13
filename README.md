# NotasGitAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Mis Notas

- Para empezar con angular lo primero, tener instalado NodeJS con NVM de preferencia
- Tener instalado el CLI de Angular, con 'npn install -g @angular/cli'
- En Windows es probable que tengamos problemas de acceso por lo que deberiamos ejecutar:
'Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned', en Linux simplemente
con permisos SUDO.
- Para crear un proyecto hay 2 visiones una es usando la estructura 'standalone' que es la 
caracteristica principal y de las ultimas versiones de Angular y otra es usando 'NgModule'
que es una estructura clasica que mantiene la separacion de capas en modulos
'ng new my-app' y 'ng new my-app --no-standalone' respectivamnete.
- Ingresamos a la carpeta del proyecto :D
- Si queremos Bootstrap simplemente 'npm install bootstrap'
- Para levantar un servidor local 'ng serve'
- Para desplegar el proyecto en GitHub Pages, construimos la aplicacion 'ng build', agregamos
las dependencias de GitHub 'ng add angular-cli-ghpages', deplegamos 'ng deploy'
- Si queremos hacer cambios para GitHub Pages seguimos los pasos anteriores pero sin agregar las
dependencias de GitHub porque ya lo hicimos :D

