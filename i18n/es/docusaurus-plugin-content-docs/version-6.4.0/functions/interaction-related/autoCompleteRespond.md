---
title: '$autoCompleteRespond'
description: El $autoCompleteRespond se utiliza para completar automáticamente las opciones de barra.
id: autoCompleteRespond
---

`$autoCompleteRespond` se utiliza para autocompletar las opciones de barra.

## Uso

```php
$autoCompleteRespond[objeto]
```

```php
$autoCompleteRespond[nombre de la opción;OpciónResponder;...]
```

## Parámetros

| Campo               | Tipo     | Parámetros                                                                                                 | Requerido |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |:---------:|
| Nombre de opción    | consulta | Nombre de la opción de autocompletar que se mostrará al usuario.                                           | verdadero |
| Opción de respuesta | consulta | La respuesta que se enviará si la opción de autocompletado fue seleccionada, (no visible para el usuario). | verdadero |

## Ejemplo(s)

Crea la barra de comandos: (por favor ten en cuenta que necesitas los eventos `: ["onMessage", "onInteractionCreate"]` evento en tu archivo principal)

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
}]
  `
});
```

Comando de interacción:

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[Primera opción;Seleccionó la primera opción, por lo tanto estoy respondiendo con esto!;Segunda opción;Seleccionó el primer segundo, por lo tanto, estoy respondiendo con esto!]
  $else
  $interactionReply[$slashOption[option];;;;everyone]
  $endif
  `
});
```

### Ejemplo(s) avanzado

Crea la barra de comandos: (por favor ten en cuenta que necesitas los eventos `: ["onMessage", "onInteractionCreate"]` evento en tu archivo principal)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global;ejemple;Impresionante comando de interacción de ejemplo con autocompletar.;true;slash;[{
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
}]
  `
});
```

Comando de interacción:

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
