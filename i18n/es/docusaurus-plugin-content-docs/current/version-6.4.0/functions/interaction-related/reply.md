---
title: '$reply'
description: '$reply will reply to a given message.'
id: reply
---

`$reply` will reply to a given message.

## Modo de uso

```php
$reply[messageID?;mentionUser?]
```

## Parámetros

| Campo          | Tipo    | Parámetros                                                                                     | Requerido |
| -------------- | ------- | ---------------------------------------------------------------------------------------------- |:---------:|
| ID de mensaje? | entero  | The ID of the message that will be replied to.                                                 |    no     |
| mentionUser?   | boolean | Mention the author in the reply? <br /> 1. **true** (default)  <br /> 2. **false** |    no     |

## Ejemplo(s)

This will reply to your command message:

```javascript
bot.command({
    name: 'reply',
    code: `
   Hello!
   $reply[$messageID;true]
  `
});
```