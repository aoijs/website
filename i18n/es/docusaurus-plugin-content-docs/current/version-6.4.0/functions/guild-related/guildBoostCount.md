---
title: '$guildBoostCount'
description: '$guildBoostCount will return the guild''s boost count.'
id: guildBoostCount
---

`$guildBoostCount` will return the guild's boost count.

## Modo de uso

```php
$guildBoostCount[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the amount of boosts a specific guild has:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
