---
title: '$guildDescription'
description: '$guildDescription will return the guild''s description.'
id: guildDescription
---

`$guildDescription` will return the guild's description.

## Modo de uso

```php
$guildDescription[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the description of a specific guild:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
