---
title: '$deleteChannels'
description: '$deleteChannels will delete multiple channels.'
id: deleteChannels
---

`$deleteChannels` will delete multiple channels.

## Modo de uso

```php
$deleteChannels[...channels]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                             | Requerido |
| ----------- | ------- | ------------------------------------------------------ |:---------:|
| ...channels | integer | The channel Ids of the channels which will be deleted. | verdadera |

## Ejemplo(s)

This will delete multiple channels, make sure to replace the arguments:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
