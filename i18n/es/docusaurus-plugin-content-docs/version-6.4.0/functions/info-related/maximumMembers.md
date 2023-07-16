---
title: '$maximumMembers'
description: '$maximumMembers devolverá la cantidad máxima de miembros que puede tener un servidor.'
id: maximumMembers
---

`$maximumMembers` devolverá la cantidad máxima de miembros que puede tener un servidor.

## Uso

```php
$maximumMembers[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros       | Requerido |
| ----------- | ------- | ---------------- |:---------:|
| servidorID? | integer | ID del servidor. |    no     |

## Ejemplo(s)

Esto te devolverá el máximo de miembros que puedes tener en tu servidor:

```javascript
bot.command({
    name: 'maximumMembers',
    code: `
  Puedes tener:  ¡$maximumMembers[$guildID] miembros en este servidor!
  `
});
```
