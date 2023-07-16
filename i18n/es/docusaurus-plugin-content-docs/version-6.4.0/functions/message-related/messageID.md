---
title: '$messageID'
description: '$messageID devolverá el ID del mensaje.'
id: messageID
---

`$messageID` devolverá las banderas de un mensaje.

## Uso

```php
$messageID
```

## Ejemplo(s)

Esto devolverá el ID de categoría del canal de texto en el que ejecute el comando:

```javascript
bot.command({
    name: 'messageID',
    code: `
  El ID de mensaje de su mensaje que acaba de enviar es: "$messageID"
  `
});
```
