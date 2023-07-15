---
title: '$sendMessage'
description: '$sendMessage will send a message in the execution channel.'
id: sendMessage
---

`$sendMessage` will send a message in the execution channel.

## Modo de uso

```php
$sendMessage[content;returnID?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                           | Requerido |
| --------- | -------- | ------------------------------------------------------------------------------------ |:---------:|
| contenido | consulta | Message Content to send.                                                             | verdadero |
| returnID? | boolean  | Return message ID?  <br /> 1. **true** <br /> 2. **false** (por defecto) |    no     |

## Ejemplo(s)

This will send a message in the current channel:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

This will send an embed in the current channel using parsers:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello! {newEmbed:{title:Bonjour!}};false]  
  `
});
```