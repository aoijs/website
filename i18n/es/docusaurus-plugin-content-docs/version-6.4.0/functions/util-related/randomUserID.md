---
title: '$randomUserID'
description: '$randomUserID devolverá un nombre de usuario aleatorio.'
id: randomUserID
---

`$randomUserID` devolverá un nombre de usuario aleatorio.

## Uso

```php
$randomUserID[global/guildID?]
```

## Parámetros

| Campo            | Tipo   | Parámetros                                                                | Requerido |
| ---------------- | ------ | ------------------------------------------------------------------------- |:---------:|
| ¿global/guildID? | string | Devuelve un usuario aleatorio de toda la guild o de una guild específica. |    no     |

## Ejemplo(s)

Esto devolverá un id de usuario aleatorio.

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
