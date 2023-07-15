---
title: '$guildNames'
description: '$guildNames will return the guide names your bot is in.'
id: guildNames
---

`$guildNames` will return the guide names your bot is in.

## Modo de uso

```php
$guildNames[sep?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                      | Requerido |
| ----- | ------ | ----------------------------------------------- |:---------:|
| sep?  | string | Separator to separate multiple returned values. |    no     |

## Ejemplo(s)

This will return the names of the guilds your bot is in and separate it by a comma:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
