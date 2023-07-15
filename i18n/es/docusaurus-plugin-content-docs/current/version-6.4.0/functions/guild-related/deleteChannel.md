---
title: '$deleteChannel'
description: '$deleteChannel will delete a specific channel.'
id: deleteChannel
---

`$deleteChannel` will delete a specific channel.

## Modo de uso

```php
$deleteChannel[channelID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                           | Requerido |
| ------- | ------- | ---------------------------------------------------- |:---------:|
| canalID | integer | The channel ID of the channel which will be deleted. | verdadera |

## Ejemplo(s)

This will delete the channel where the command was executed in:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
