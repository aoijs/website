---
title: '$killClient'
description: '$killClient cerrará forzosamente su bot.'
id: killClient
---

`$killClient` cerrará forzosamente su bot.

## Modo de uso

```php
$killClient
```

## Ejemplo(s)

Esto forzará el cierre de su bot:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```