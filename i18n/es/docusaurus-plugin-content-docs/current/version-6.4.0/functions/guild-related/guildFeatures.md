---
title: '$guildFeatures'
description: '$guildFeatures will return unlocked guild features.'
id: guildFeatures
---

`$guildFeatures` will return unlocked guild features.

## Modo de uso

```php
$guildFeatures[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the unlocked guild features of a guild:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
