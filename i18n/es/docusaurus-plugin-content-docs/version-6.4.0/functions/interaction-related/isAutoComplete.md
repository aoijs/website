---
title: '$isAutoComplete'
description: '$isAutoComplete devolverá verdadero o falso dependiendo de que la opción de la barra de comandos introducida sea autocompletada o no. (función autoCompleteRespond)'
id: isAutoComplete
---

`$isAutoComplete` devolverá verdadero o falso según la opción de comando de barra inclinada ingresada que se complete automáticamente o no. (función autoCompleteRespond)

## Uso

```php
$isAutoComplete
```

## Ejemplo(s)

Esto creará un comando de barra con la función "autocompletar":

Tenga en cuenta que requiere "**events: ["onMessage", "onInteractionCreate"]**" en su archivo principal (también conocido como, en la mayoría de los casos, index.js)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
  "name": "option", 
  "description": "test",
  "required": false,
  "type": 3, 
  "autocomplete": true
}]]`
});
```

Comprobando si el autocompletado es igual a `true`, si es así responderá con la respuesta dada (adición del código anterior):

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[Primera opción;¡Seleccionaste la primera opción, por lo tanto estoy respondiendo con esto!;Segunda opción;¡Seleccionaste el primer segundo, por lo tanto, estoy respondiendo con esto!]
  $else
  $interactionReply[$slashOption[option];;;;everyone]
  $endif
  `
});
```

Crear los comandos de barra con otra opción:

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
  "name": "option",
  "description": "test",
  "required": false, 
  "type": 3,
  "autocomplete": true 
}, {
  "name": "anotheroption",
  "description": "test",
  "required": false,
  "type": 3
}]]`
});
```

Comprobando si el autocompletado es igual a `true`, si es así responderá con la respuesta dada (adición del código anterior):

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "Primera opción",
    "value" : "¡Seleccionaste la primera opción, por lo tanto respondo con esto!"
  }, {
    "name" : "Segunda opción",
    "value" : "¡Seleccionaste la segunda opción, por lo tanto estoy respondiendo con esto!"
  }]]
  $else
  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]
  $endif
  `
});
```