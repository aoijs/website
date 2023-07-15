---
title: '$guildIDS'
description: '$guildIDS will return the ID of every guild your bot is in.'
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## Modo de uso

```php
$guildIDS[sep?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                          | Requerido |
| ----- | ------ | --------------------------------------------------- |:---------:|
| sep?  | string | The separator to separate multiple returned values. |    no     |

## Ejemplo(s)

This will return all guild IDs your bot is in:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
