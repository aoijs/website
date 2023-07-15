---
title: '$guildBanner'
description: '$guildBanner will return the guild banner of a given guild.'
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## Modo de uso

```php
$guildBanner[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
