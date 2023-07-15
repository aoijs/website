---
title: '$hasEmbeds'
description: '$hasEmbeds will check if there are embeds attached to the message.'
id: hasEmbeds
---

`$hasEmbeds` will check if there are embeds attached to the message.

## Modo de uso

```php
$hasEmbeds[messageID;channelID]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                          | Requerido |
| ------------- | ------ | --------------------------------------------------- |:---------:|
| ID de mensaje | entero | ID of the message to check if it contains an embed. | verdadero |
| canalID       | entero | ID of the channel where the message is located in.  | verdadero |

## Ejemplo(s)

This will return `false` as there are no embeds attached to your message:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
