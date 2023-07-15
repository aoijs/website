---
title: '$messageExists'
description: '$messageExists will check if a specific message exists.'
id: messageExists
---

`$messageExists` will check if a specific message exists.

## Modo de uso

```php
$messageExists[messageID;channelID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                  | Requerido |
| ------------- | ------ | ------------------------------------------- | --------- |
| ID de mensaje | entero | the id of the message                       | verdadero |
| canalID?      | entero | the channel id where the message is located | no        |

## Ejemplo(s)

This will return `false` as the message doesn't exist in the given channel:

```javascript
bot.command({
    name: 'messageExists',
    code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```
