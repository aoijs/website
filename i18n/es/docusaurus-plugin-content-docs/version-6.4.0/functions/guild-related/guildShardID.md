---
title: '$guildShardID'
description: '$guildShardID devolverá el ID del fragmento actual.'
id: guildShardID
---

`$guildShardID` devolverá el ID del fragmento actual.

## Uso

```php
$guildShardID
```

**Tenga en cuenta que esto no funcionará sin fragmentar. Si no estás seguro, revisa la [guía de fragmentación](../../guides/client/6sharding.md).**

## Ejemplo(s)

Esto devolverá el ID del fragmento actual:

```javascript
bot.command({
    name: 'guildShardID',
    code: `
  ¡Actualmente estoy en el fragmento $guildShardID!
  `
});
```
