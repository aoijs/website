---
title: '$channelNSFW'
description: '$channelNSFW will return true or false depending if the given channel is marked as NSFW or not.'
id: channelNSFW
---

`$channelNSFW` will return true or false depending if the given channel is marked as NSFW or not.

## Modo de uso

```php
$channelNSFW[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                        | Requerido |
| -------- | ------- | ----------------------------------------------------------------- |:---------:|
| canalID? | integer | ID of the channel you want to check if its marked as NSFW or not. |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if the channel where you execute the command is marked as NSFW or not:

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```