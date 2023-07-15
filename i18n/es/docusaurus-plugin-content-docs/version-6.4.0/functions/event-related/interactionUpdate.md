---
title: '$interactionUpdate'
description: '$interactionUpdate actualizará una interacción existente.'
id: interactionUpdate
---

`$interactionUpdate` devolverá la actualización de una interacción existente.

## Uso

```php
$interactionUpdate[contenido?;incrusta?;componentes?;archivos?]
```

## Parámetros

| Campo         | Tipo   | Descripción                  | Requerido |
| ------------- | ------ | ---------------------------- |:---------:|
| contenido?    | cadena | Nuevo contenido del mensaje. |   falso   |
| incrusta?     | cadena | Analizador incrustado.       |   falso   |
| ¿componentes? | cadena | Analizador de componentes.   |   falso   |
| archivos?     | cadena | analizador de archivos.      |   falso   |

## Ejemplo(s)

```javascript
bot.interactionCommand({
    name: "interactionUpdate",
    prototype: "slash",
    code: `
  $interactionReply[Hola mundo!;;{actionRow:{button:Example Button!:primary:customID:false}};;everyone;false]
  `
});
```

```js
bot.interactionCommand({
    name: "customID",
    prototype: "button",
    code: `
  $interactionUpdate[Adios, mundo.]
  `
});
```