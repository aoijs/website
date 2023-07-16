---
title: '$emojisFromMessage'
description: '$emojisFromMessage recuperará todos los emojis dados en un mensaje.'
id: emojisFromMessage
---

`$emojisFromMessage` devuelve todos los emojis en un mensaje determinado.

## Uso

```php
$emojisFromMessage
```

**Ten en cuenta que tu bot tiene que estar presente en el gremio donde están los emoji.**

## Ejemplo(s)

Esto devolverá cualquier emojis que usted dé como argumento:

```javascript
bot.command({
    name: 'emojisFromMessage',
    code: `
$emojisFromMessage
  `
});
```
