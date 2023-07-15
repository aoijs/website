---
title: '$guildName'
description: '$guildName will return a guild''s name.'
id: guildName
---

`$guildName` will return a guild's name.

## Modo de uso

```php
$guildName[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the name of your guild:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
