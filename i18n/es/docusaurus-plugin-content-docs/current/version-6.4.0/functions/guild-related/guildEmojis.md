---
title: '$guildEmojis'
description: '$guildEmojis will return the emojis of a specific guild.'
id: guildEmojis
---

`$guildEmojis` will return the emojis of a specific guild.

## Modo de uso

```php
$guildEmojis[sep?;guildID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                     | Requerido |
| ----------- | -------- | ---------------------------------------------- |:---------:|
| sep?        | consulta | The separator to separate the returned emojis. |    no     |
| servidorID? | entero   | The ID of the guild.                           |    no     |

## Ejemplo(s)

This will return the emojis of your guild:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
