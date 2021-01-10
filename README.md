# foodAdvisor

Aplicación del curso sobre Nuxt de la plataforma OpenWebinars.

## Características
* Muestra los restaurantes existentes en la BD de firebase
* Desde /admin, después de hacer login, permite editar y añadir restaurantes

Es necesario rellenar los datos de la configuración de firebase en el archivo
plugins/firebase.js Cambiar las siguientes líneas de código por las que proporciona
firebase al crear un proyecto nuevo
```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
