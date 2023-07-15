---
title: '$channelUsed'
description: '$channelUsed devolverá el ID del canal donde se activó el evento.'
id: channelUsed
---

`$channelUsed` devolverá el ID del canal donde se activó el evento.

## Uso

```php
$channelUsed
```

## Ejemplo(s)

Esto devolverá la cantidad de roles de tu gremio:

**Necesitas `onMessageDelete` en su archivo principal para usar este ejemplo! **

```javascript
bot.deletedCommand({
    channel: "channelID",
    code: `$userTag borró un mensaje en <#$channelUsed>!`
});
```
