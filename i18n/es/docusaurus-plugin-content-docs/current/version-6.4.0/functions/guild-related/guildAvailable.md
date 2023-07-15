---
title: '$guildAvailable'
description: '$guildAvailable will return if the given guild is available on Discord.'
id: guildAvailable
---

`$guildAvailable` will return if the given guild is available on Discord.

## Modo de uso

```php
$guildAvailable[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return `true` or `false` depending on if the guild is available:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
