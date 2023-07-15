---
title: '$isVideoOn'
description: '$isVideoOn checks if the given user has their video on in a voice channel.'
id: isVideoOn
---

`$isVideoOn` checks if the given user has their video on in a voice channel.

## Modo de uso

```php
$isVideoOn[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                     | Requerido |
| ----------- | ------ | -------------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID of the user who turned video on.                            |    no     |
| servidorID? | entero | ID of the guild you want to check if they have their video on. |    no     |

## Ejemplo(s)

This will check if you're currently using the video feature in a voice channel:

```javascript
bot.command({
    name: 'isVideoOn',
    code: `
  $isVideoOn[$authorID;$guildID]
  `
});
```
