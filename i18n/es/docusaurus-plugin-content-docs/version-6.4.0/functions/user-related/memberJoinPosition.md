---
title: '$memberJoinPosition'
description: '$memberJoinPosition devolverá una posición de unión de miembros.'
id: memberJoinPosition
---

`$memberJoinPosition` devolverá un miembro a la posición de unirse.

## Uso

```php
$memberJoinPosition[usuarioID?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros         | Requerido |
| ----------- | ------ | ------------------ |:---------:|
| usarioID?   | entero | El ID del usuario. |   falso   |
| servidorID? | entero | ID del servidor.   |   falso   |

## Ejemplo(s)

Esto devolverá tu posición de ingreso, si eres el propietario, entonces sería `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
