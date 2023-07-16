---
title: '$memberJoinDate'
description: '$memberJoinDate will return a members join date in MS.'
id: memberJoinDate
---

`$memberJoinDate` will return a members join date in MS.

## Uso

```php
$memberJoinDate[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros           | Requerido |
| ----------- | ------ | -------------------- |:---------:|
| usarioID?   | entero | El ID del usuario.   |    no     |
| servidorID? | entero | The ID of the guild. |    no     |

## Ejemplo(s)

This will return your join date in MS and parsed date:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
