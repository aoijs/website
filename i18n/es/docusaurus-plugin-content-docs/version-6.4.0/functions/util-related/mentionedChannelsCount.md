---
title: $mentionedChannelsCount
description: '$mentionedChannelsCount devolverá la cantidad de menciones del canal dentro de un mensaje.'
id: mentionedChannelsCount
---

`$mentionedChannelsCount` devolverá la cantidad de menciones del canal dentro de un mensaje.

## Uso

```php
$mentionedChannelsCount
```

## Ejemplo(s)

Esto devolverá la cantidad de menciones de canal en el texto dado:

```javascript
bot.command({
    name: 'mentionedChannelsCount',
    code: `
  $mentionedChannelsCount
  <#837531672341381190> <#869210515065426012> <#805852932938661900>
  `
});
```
