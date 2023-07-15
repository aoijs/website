---
title: '$channelExists'
description: '$channelExists will check if the given channel exists.'
id: channelExists
---

`$channelExists` will check if the given channel exists.

## Modo de uso

```php
$channelExists[channel]
```

## Parámetros

| Campo   | Tipo            | Parámetros                  | Requerido |
| ------- | --------------- | --------------------------- |:---------:|
| channel | string, integer | Channel ID or channel name. | verdadera |

## Ejemplo(s)

This will check if a channel with the name `general` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
