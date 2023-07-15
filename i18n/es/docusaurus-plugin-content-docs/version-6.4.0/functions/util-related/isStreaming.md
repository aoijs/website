---
title: '$isStreaming'
description: '$isStreaming will check if one user is streaming in a voice channel.'
id: isStreaming
---

`$isStreaming` will check if one user is streaming in a voice channel.

## Modo de uso

```php
$isStreaming[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                             | Requerido |
| ----------- | ------ | ------------------------------------------------------ |:---------:|
| usarioID?   | entero | ID of the user you want to check if they're streaming. |    no     |
| servidorID? | entero | ID of the channel where they're streaming in.          |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're streaming (voice channel) or not:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
