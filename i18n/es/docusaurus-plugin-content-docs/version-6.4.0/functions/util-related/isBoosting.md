---
title: '$isBoosting'
description: '$isBoosting will check if the given user is boosting the given guild.'
id: isBoosting
---

`$isBoosting` will check if the given user is boosting the given guild.

## Uso

```php
$isBoosting[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                     | Requerido |
| ----------- | ------ | ---------------------------------------------- |:---------:|
| usarioID?   | entero | User ID to check if they're boosting.          |    no     |
| servidorID? | entero | The guild ID of where they boosted the server. |    no     |

## Ejemplo(s)

This will return `false` or `true` depending on if you boosted this server:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
