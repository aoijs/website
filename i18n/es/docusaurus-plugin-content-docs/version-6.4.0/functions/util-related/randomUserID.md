---
title: '$randomUserID'
description: '$randomUserID will return a random username.'
id: randomUserID
---

`$randomUserID` will return a random username.

## Modo de uso

```php
$randomUserID[global/guildID?]
```

## Parámetros

| Campo           | Tipo   | Parámetros                                                               | Requerido |
| --------------- | ------ | ------------------------------------------------------------------------ |:---------:|
| global/guildID? | string | Return a random user out of all guild or out of one specific guild only. |    no     |

## Ejemplo(s)

This will return a random user id:

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
