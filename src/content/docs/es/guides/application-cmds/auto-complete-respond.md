---
title: Autocompletar
description: Esta página cubre todo sobre la propiedad de autocompletar de los Comandos de Aplicación.
id: interaccion-autocompletar
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/3.png
sidebar:
  order: 4
---

Hay varias formas de usar `$autoCompleteRespond`, puedes usar JSON o la forma simple de aoi.js.

### Uso

```php
$autoCompleteRespond[NombreOpción;RespuestaOpción;...]
```

```php
$autoCompleteRespond[[{
    "name" : "Nombre de la Opción Uno",
    "value" : "Respuesta de la Opción 1"
  }, {
    "name" : "Nombre de la Opción Dos",
    "value" : "Respuesta de la Opción 2"
  }]]
```

Crea el comando de barra, esto creará un comando de aplicación global con el nombre "ejemplo" con una opción que utiliza el autocompletar:

```javascript
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[global;ejemplo;¡Increíble comando de interacción de ejemplo con autocompletar!;true;true;slash;[{
    "name": "opcion", 
    "description": "¡Primera opción!",
    "required": false,
    "type": 3, 
    "autocomplete": true
}]]`
});
```

Comprobando si autoComplete es igual a `true`, si es así, responderá con la respuesta dada (adición del código anterior):

```javascript
client.command({
  name: "ejemplo",
  prototype: "slash",
  $if: "old",
  code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[Primera opción;Seleccionaste la primera opción, ¡por lo tanto, estoy respondiendo con esto!;Segunda opción;Seleccionaste la segunda opción, ¡por lo tanto, estoy respondiendo con esto!]
  $else
  $interactionReply[$slashOption[opcion]]
  $endif
  `
});
```

Crea el comando de barra, esto creará un comando de aplicación global con el nombre "ejemplo":

```javascript
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[global;ejemplo;¡Increíble comando de interacción de ejemplo con autocompletar!;true;slash;[{
    "name": "opcion",
    "description": "Primera opción con autocompletar.",
    "required": false, 
    "type": 3,
    "autocomplete": true 
  }, {
    "name": "otraopcion",
    "description": "Otra opción.",
    "required": false,
    "type": 3
}]]`
});
```

Usando JSON y comprobando si autoComplete es igual a `true`, si es así, responderá con la respuesta dada:

```javascript
module.exports = [{
    name: "ejemplo",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "Primera Opción",
    "value" : "Seleccionaste la primera opción, por lo tanto, estoy respondiendo con esto."
  }, {
    "name" : "Segunda Opción",
    "value" : "Seleccionaste la segunda opción, por lo tanto, estoy respondiendo con esto."
  }]]
  $else
  $interactionReply[$slashOption[opcion] - autocompletar #SEMI# $slashOption[otraopcion] - autocompletar falso;;;;todos]
  $endif
  `
}];
```