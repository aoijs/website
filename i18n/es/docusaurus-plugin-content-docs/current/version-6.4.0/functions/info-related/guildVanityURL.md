---
title: '$guildVanityURL'
description: '$guildVanityURL will return a guild''s vanity URL.'
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## Modo de uso

```php
$guildVanityURL[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros    | Requerido |
| ----------- | ------- | ------------- |:---------:|
| servidorID? | integer | The guild ID. |    no     |

## Ejemplo(s)

This will return the vanity URL of your guild, if you have one:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
