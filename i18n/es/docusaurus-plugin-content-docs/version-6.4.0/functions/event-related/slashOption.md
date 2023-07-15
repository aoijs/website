---
title: '$slashOption'
description: '$slashOption devuelve datos de una opción de comando.'
id: slashOption
---

`$slashOption` devuelve datos de una opción de comando.

## Uso

```php
$slashOption[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción       | Requerido |
| ------ | ------ | ----------------- |:---------:|
| opción | cadena | Nombre de opción. | verdadera |

## Ejemplo(s)

```javascript
$createApplicationCommand[global;exampleslash;Comando de barra de ejemplo simple.;true;slash;[{
    "name": "exampleOption",
    "description": "opción de comando de barra de ejemplo",
    "required": true,
    "type": 3
}]]
```

```javascript
bot.command({
    name: 'exampleslash',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[¡Qué gran ejemplo! Entraste $slashOption[exampleOption]!]`
});
```