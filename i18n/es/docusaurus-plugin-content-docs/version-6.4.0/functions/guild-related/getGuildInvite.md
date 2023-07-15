---
title: '$getGuildInvite'
description: '$getGuildInvite devolverá todos los canales de una categoría determinada.'
id: getGuildInvite
---

`$getGuildInvite` devolverá todos los canales de una categoría determinada.

## Uso

```php
$getGuildInvite[servidorID?;...opciónes]
```

## Parámetros

| Campo       | Tipo   | Descripción                                       | Requerido |
| ----------- | ------ | ------------------------------------------------- |:---------:|
| servidorID? | entero | El ID del canal del cual se creará la invitación. |   falso   |
| opciones?   | cadena | Objeto de opción de invitación.                   |   falso   |

<details>
  <summary><h3>Tipos de destino de invitación</h3></summary>

| TIPO                 | VALOR |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## Ejemplo(s)

Esto creará una invitación del canal donde se ejecuta el comando en:

```javascript
bot.command({
    name: 'getGuildInvite',
    code: `
  $getGuildInvite[$guildID]
  `
});
```

### Ejemplo(s) avanzado

Crear invitaciones temporales con usos limitados:

```javascript
bot.command({
    name: 'getGuildInvite',
    code: `
  $getGuildInvite[$guildID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```
