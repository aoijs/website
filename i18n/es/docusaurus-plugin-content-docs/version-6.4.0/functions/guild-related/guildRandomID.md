---
title: '$guildRandomID'
description: '$guildRandomID devolverá un ID de guild aleatorio.'
id: guildRandomID
---

`$guildRandomID` devolverá un ID de guild aleatorio.

## Uso

```php
$guildRandomID
```

## Ejemplo(s)

Esto devolverá una hermandad aleatoria si tu bot es miembro de:

```javascript
bot.command({
    name: 'guildRandomID',
    code: `
  $guildRandomID
  `
});
```
