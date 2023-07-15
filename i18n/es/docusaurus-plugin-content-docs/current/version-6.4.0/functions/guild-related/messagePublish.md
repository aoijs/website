---
title: '$messagePublish'
description: '$messagePublish will publish a message in an announcement channel.'
id: messagePublish
---

`$messagePublish` will publish a message in an announcement channel.

## Modo de uso

```php
$messagePublish[messageID;channelID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                   | Requerido |
| ------------- | ------ | ------------------------------------------------------------ |:---------:|
| ID de mensaje | entero | The ID of the message which should be published.             | verdadero |
| canalID?      | entero | The ID of the channel where the given message is located in. |    no     |

## Ejemplo(s)

This will publish a message ( will only work in announcement channels ):

```javascript
bot.command({
    name: 'messagePublish',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```
