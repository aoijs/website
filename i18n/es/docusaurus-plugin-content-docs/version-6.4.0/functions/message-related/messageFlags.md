---
title: '$messageFlags'
description: '$messageFlags will return a message''s flags.'
id: messageFlags
---

`$messageFlags` will return a message's flags.

## Modo de uso

```php
$messageFlags[messageID;sep?;channelID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                         | Requerido |
| ------------- | -------- | -------------------------------------------------- |:---------:|
| ID de mensaje | entero   | The ID of the message.                             | verdadero |
| sep?          | consulta | Separator to separate returned values.             |    no     |
| canalID?      | entero   | ID of the channel where the message is located in. |   falso   |

## Ejemplo(s)

This will the message flags of your initial command message:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
