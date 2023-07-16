---
title: '$channelNSFW'
description: '$channelNSFW devolverá true o false dependiendo de si el canal dado está marcado como NSFW o no.'
id: channelNSFW
---

`$channelNSFW` devolverá true o false dependiendo de si el canal dado está marcado como NSFW o no.

## Uso

```php
$channelNSFW[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                         | Requerido |
| -------- | ------- | ------------------------------------------------------------------ |:---------:|
| canalID? | integer | ID del canal que quieres comprobar si está marcado como NSFW o no. |    no     |

## Ejemplo(s)

Esto devolverá `true` or `false` dependiendo de si el canal donde ejecutas el comando está marcado como NSFW o no:

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```