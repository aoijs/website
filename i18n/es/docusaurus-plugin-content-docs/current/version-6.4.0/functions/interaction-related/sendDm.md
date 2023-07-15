---
title: '$sendDm'
description: '$sendDm will Direct Message a given user.'
id: sendDm
---

`$sendDm` will Direct Message a given user.

## Modo de uso

```php
$sendDm[message;userID?;returnID?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                           | Requerido |
| --------- | -------- | ------------------------------------------------------------------------------------ |:---------:|
| message   | consulta | The content of the Direct Message.                                                   | verdadero |
| usarioID? | consulta | The user that will receive the DM.                                                   |    no     |
| returnID? | booleano | Return message ID?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

This will send a DM to the command author:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```