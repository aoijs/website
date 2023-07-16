---
title: '$memberJoinPosition'
description: '$memberJoinPosition will return a members join position.'
id: memberJoinPosition
---

`$memberJoinPosition` will return a members join position.

## Uso

```php
$memberJoinPosition[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros           | Requerido |
| ----------- | ------ | -------------------- |:---------:|
| usarioID?   | entero | El ID del usuario.   |    no     |
| servidorID? | entero | The ID of the guild. |    no     |

## Ejemplo(s)

This will return your join position, if you're the owner then it'd be `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
