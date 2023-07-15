---
title: '$createChannelInvite'
description: '$createChannelInvite creará una invitación al canal.'
id: createChannelInvite
---

`$createChannelInvite` devolverá todos los canales de una categoría determinada.

## Uso

```php
$createChannelInvite[canalID?;...opciones]
```

## Parámetros

| Campo     | Tipo   | Descripción                                       | Requerido |
| --------- | ------ | ------------------------------------------------- |:---------:|
| canalID?  | entero | El ID del canal del cual se creará la invitación. |   falso   |
| opciones? | objeto | Opciones de invitación.                           |   falso   |

<details open>
  <summary><h3> Invitar Tipos de Objetivo </h3></summary>

| TIPO                 | VALOR |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## Ejemplo(s)

Esto creará una invitación del canal donde se ejecuta el comando en:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[$channelID]
  `
});
```

### Ejemplo(s) avanzado

Crear invitaciones temporales con usos limitados:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[$channelID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```

Crear Invitaciones de Actividad:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[voiceID;{
            "targetApplication": "application ID",
            "targetType": 2
  }]
  `
});
```
