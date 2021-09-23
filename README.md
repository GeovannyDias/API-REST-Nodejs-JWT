# API REST - Node.js - JWT
Node.js - API REST con JWT, Roles (Autorización y Autenticación) - MongoDB


## Dependencies

```
mpm init
mpm init -y
npm i -S express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet


express = Framework de nodejs para crear el servidor, manejar peticiones http, etc.
bcryptjs = cifrar datos, etc.
cors = comunica el BackEnd con otros servidores de app de FrontEnd, etc.
dotenv = Crea variables de entorno, etc.
jsonwebtoken = Crea autenticación por medio de token, etc.
mongoose = módulo de conexión con la base de datos (MongoDB).
morgan = Permite ver por consola las peticiones que van llegando al servidor, etc.
helmet = Añade caracteristicas de seguridad para que el servidor no de información. Ej: no se muestre que versión de express se usa, ayuda con algunas validaciones olvidadas por el usuario, etc.

```

## devDependencies

```
ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.


Babel: es un transcompilador de JavaScript gratuito y de código abierto que se utiliza principalmente para convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores que puede ser ejecutada por motores JavaScript más antiguos.


Babel is a JavaScript compiler.
https://babeljs.io/

npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
or
npm i -D @babel/core @babel/cli @babel/node @babel/preset-env

En la raíz creamos un fichero .babelrc para que babel sepa que preset estamos utilizando, es decir, que es lo que va a traducir babel.

FIle → .babelrc

{
    "presets": [
        "@babel/preset-env"
    ]
}


INSTALAMOS NODEMON:
npm i nodemon -D


```

## Scripts

```

  "scripts": {
    "dev": "nodemon src/index.js --exec babel-node",
    "build": "babel src --out-dir build",
    "start": "node build/index.js"
  },


npm run dev → Desarrollar
npm run build → Convertir el código
npm start → Para ejecutar el código en producción

```

## Structure Folders

```
mkdir controllers, libs, middlewares, models, routes

controllers = crear las funciones que vamos a manejar cada vez que el usuario visite un URL.
libs = Colocar código que podemos reutilizar.
middlewares = middlewares de express, funciones que se ejecutan cada vez que un user visita una ruta.
models = para especificar los modelos de datos que vamos a utilizar en MongoDB.
routes = EScribir URL que va ha tener dispolible el servidor.

app.js = para configurar la aplicación.
config.js = crear propiedades de configuración.
database.js = conexión de la base de datos, user, etc.

Dependencia DOTENV:

g=geo
g=/g=1-6

En la raíz del proyecto crar un fichero .env y registrar las variables de entorno de la base de datos y contraseñas:

File: .env

DB_MONGO=mongodb+srv://user:<password>>@cluster0.pebzw.mongodb.net/company-db
SECRET=secret-password-company-api


```


## SSL

```
- Certbot:

https://certbot.eff.org/


```

## Módulos para subir imagenes

```
multer:
https://www.npmjs.com/package/multer

busboy:
https://www.npmjs.com/package/busboy

```

## Pendientes

```
Códigos de estado de respuesta HTTP:
https://developer.mozilla.org/es/docs/Web/HTTP/Status

Bibliotecas de validación de express:

express validator:
https://express-validator.github.io/docs/

joi npm:

https://www.npmjs.com/package/joi

Despliegue de APIS:

Heroku
Docker

Database:

mongodb atlas

```

## Environment Variables

```
S.O. Unix (Linux or Mac):

export PORT=2000
export DB_PASSWORD=1234567890
export TOKEN_FB=456asd45a6dSAS546AA54654


S.O. Windows:

set PORT=2000
set DB_PASSWORD=1234567890
set TOKEN_FB=456asd45a6dSAS546AA54654

SOlVE CROSS PLATFORM (Node.js):

CROSS-ENV:

npm i cross-env -S
En lugar de tipear export o set, se usa cross-env, funciona para Windows, Linux y Mac.
npx cross-env PORT=4000 node index.js
process.env.PORT

DOTENV:

npm i dotenv -S

Create file .env and writting:

PORT=2000
DB_PASSWORD=1234567890
TOKEN_FB=456asd45a6dSAS546AA54654

require('dotenv').config();




```

