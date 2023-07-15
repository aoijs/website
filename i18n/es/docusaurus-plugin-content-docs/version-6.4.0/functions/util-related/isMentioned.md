---
title: '$isMentioned'
description: '$isMentioned checks if the query contains a mention.'
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## Modo de uso

```php
$isMentioned[query]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                                    | Requerido |
| -------- | ------ | ------------------------------------------------------------- |:---------:|
| consulta | string | Where you want to check if a user/role/channel was mentioned. | verdadera |

## Ejemplo(s)

This will return `true` as you were mentioned within the message:

```javascript
bot.command({
    name: 'isMentioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
