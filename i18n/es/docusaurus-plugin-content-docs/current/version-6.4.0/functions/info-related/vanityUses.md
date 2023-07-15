---
title: '$vanityUses'
description: '$vanityUses will return the uses of a vanity URL.'
id: vanityUses
---

`$vanityUses` will return the uses of a vanity URL.

## Modo de uso

```php
$vanityUses[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros    | Requerido |
| ----------- | ------- | ------------- |:---------:|
| servidorID? | integer | The guild ID. |    no     |

## Ejemplo(s)

This will return the uses of your guild's vanity URL, if you have one:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
