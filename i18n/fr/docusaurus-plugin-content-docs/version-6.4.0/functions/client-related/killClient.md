---
title: '$killClient'
description: '$killClient va arrêter votre bot de force.'
id: killClient
---

`$killClient` va arrêter votre bot de force.

## Utilisation

```php
$killClient
```

## Exemple(s)

Ceci va forcer l'arrêt de votre bot :

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```