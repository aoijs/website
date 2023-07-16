---
title: $memberJoinedDate
description: '$memberJoinDate devolverá la fecha de ingreso de los miembros en MS.'
id: memberJoinedDate
---

`$memberJoinDate` devolverá la fecha de ingreso de los miembros en MS.

## Uso

```php
$memberJoinDate[usuarioID?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros         | Requerido |
| ----------- | ------ | ------------------ |:---------:|
| usarioID?   | entero | El ID del usuario. |   falso   |
| servidorID? | entero | ID del servidor.   |   falso   |

## Ejemplo(s)

Esto devolverá la fecha de ingreso en MS y fecha analizada:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
