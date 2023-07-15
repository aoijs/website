---
title: '$addSelectMenu'
description: '$addSelectMenu añadirá un menú seleccionado al mensaje del bot.'
id: addSelectMenu
---

`$addSelectMenu` añadirá un menú seleccionado al mensaje del bot.

## Uso

```php
$addSelectMenu[índice;ID personalizado;titular de lugar;valores mínimos
;valores máximos;desactivado?;etiqueta:descripción:valor:por defecto?:emoji?;...]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                                           | Requerido |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |:---------:|
| índice           | entero   | En la que actionRow aparece el selectMenú, un selectMenu requiere una fila completa para él solo.                    | verdadero |
| ID personalizado | consulta | El ID del componente.                                                                                                | verdadero |
| titular de lugar | cadena   | Texto del marcador de posición SelectMenú.                                                                           | verdadero |
| valores mínimos  | entero   | Seleccione Menú mínimo de opciones seleccionables                                                                    | verdadero |
| valores máximos  | entero   | Seleccione Menú mínimo de opciones seleccionables                                                                    | verdadero |
| desactivado      | booleano | Si el selectMenu aparecerá como deshabilitado- <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) | verdadero |
| options          | cadena   | Seleccionar opciones de menú separadas por eachother con `;` y `:`.                                                  | verdadero |

## Ejemplo(s)

Esto añade un menú seleccionado con dos funciones:

```javascript
bot.command({
    name: "add-select-menu",
    code: `
Seleccione una opción.

  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hola! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==anotherCustomID;]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hola! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]
  `
});
/*
Usamos "$onlyIf[$interactionData[values[0]]==customID;]" para asegurarnos de que esto solo se activará para la opción de menú de selección correspondiente.

También asegúrese de tener el evento "onInteractionCreate" en su archivo principal (index.js en la mayoría de los casos).

*/
```

Ejemplo de Manejador:

```js
module.exports = [{
    name: "add-select-menu",
    code: `
Seleccione una opción.

     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
}, {
    name: "yourCustomID",
    type: "interaction", // aclarando que este comando es una Interacción
    prototype: "selectMenu",
    code: `
     $interactionReply[Hola! :);;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==anotherCustomID;]`
}, {
    name: "yourCustomID",
    type: "interaction", // aclarando que este comando es una Interacción
    prototype: "selectMenu",
    code: `
     $interactionReply[Adios! :(;;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`
}]
```