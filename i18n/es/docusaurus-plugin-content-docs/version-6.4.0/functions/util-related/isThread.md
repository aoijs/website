---
title: '$isThread'
description: '$isThread will check if the given channel is a thread or not.'
id: isThread
---

`$isThread` will check if the given channel is a thread or not.

## Modo de uso

```php
$isThread[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                | Requerido |
| -------- | ------- | ----------------------------------------- |:---------:|
| canalID? | integer | ID of the channel that you want to check. |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're executing the command in a thread:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```