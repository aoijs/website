---
title: Variables
description: Esta guía cubrirá variables, su uso y cómo almacenar variables en otros archivos.
id: variables
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/18.png
---

:::caution[Rediseño]

Esta página será rediseñada en el futuro.

:::

Esta guía te proporcionará una comprensión completa de las variables.

### Uso de Variables

Las variables son herramientas útiles en programación que te permiten almacenar valores que se pueden acceder y manipular a lo largo de tu código. Para usar una variable, primero debes declararla dándole un nombre y asignándole un valor.

Una forma de hacer esto es mediante el siguiente fragmento de código en tu archivo principal (generalmente llamado `index.js`):

```js
client.variables({
  nombreVariable: booleano,
  nombreVariable: número,
  nombreVariable: objeto,
  nombreVariable: "cadena",
}, tabla?);
```

La función `client.variables()` toma un objeto como argumento, donde cada propiedad representa el nombre de una variable y su valor correspondiente. Puedes asignar variables a una tabla específica. Sin embargo, esto es opcional y se establecerá en "main" por defecto.

Por ejemplo:

```js {8} title="index.js"
client.variables(
  {
    enListaNegra: false,
    dinero: 0,
    desarrolladores: {},
    título: "ninguno",
  },
  "principal",
);
```

Esto también funciona:

```js title="index.js"
client.variables({
  enListaNegra: false,
  dinero: 0,
  desarrolladores: {},
  título: "ninguno",
});
```

---

## Manejadores de Variables

Otra forma de usar variables es mediante el uso de un manejador de variables, que puede ayudar a mantener tu archivo principal más organizado y limpio. Para configurar un manejador de variables, sigue estos pasos:

1. Crea un directorio llamado "**manejador**".
2. Crea un archivo dentro del directorio llamado "**variables.js**".
3. En tu archivo principal, agrega el siguiente código:

```js
require("./manejador/variables.js")(client);
```

4. En el archivo `variables.js`, crea un array de objetos, donde cada objeto representa el nombre de una variable y su valor correspondiente:

```js
module.exports = (client) => {
  client.variables({
    nombreVariable: booleano,
    nombreVariable: número,
    nombreVariable: objeto,
    nombreVariable: "cadena",
  }, tabla?);
};
```

Por ejemplo:

```js title="manejador/variables.js"
module.exports = (client) => {
  client.variables(
    {
      enListaNegra: false,
      dinero: 0,
      desarrolladores: {},
      título: "ninguno",
    },
    "principal",
  );
};
```

Esto también funciona:

```js title="manejador/variables.js"
module.exports = (client) => {
  client.variables({
    enListaNegra: false,
    dinero: 0,
    desarrolladores: {},
    título: "ninguno",
  });
};
```

Con estos pasos, ahora tienes un manejador de variables funcional, lo que puede ayudarte a mantener tu código organizado y más fácil de gestionar.