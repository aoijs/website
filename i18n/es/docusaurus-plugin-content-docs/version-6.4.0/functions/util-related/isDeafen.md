---
title: '$isDeafen'
description: '$isDeafen will check if a certain user is deafened or not.'
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## Uso

```php
$isDeafen[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                | Requerido |
| ----------- | ------ | --------------------------------------------------------- |:---------:|
| usarioID?   | entero | User ID you want to check if they're deafened,            |    no     |
| servidorID? | entero | The guild ID where you want to check if they're deafened. |    no     |

## Ejemplo(s)

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
