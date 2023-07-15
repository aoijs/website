---
title: '$messageURL'
description: '$messageURL will return the URL of a given message.'
id: messageURL
---

`$messageURL` will return the URL of a given message.

## Modo de uso

```php
$messageURL[messageID?;channelID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                         | Requerido |
| -------------- | ------ | -------------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID of the message.                                 |    no     |
| canalID?       | entero | ID of the message where the message is located in. |    no     |

## Ejemplo(s)

This will return the message URL of the message which executed the command:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
