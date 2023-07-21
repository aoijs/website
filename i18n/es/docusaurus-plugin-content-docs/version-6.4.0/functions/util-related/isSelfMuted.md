---
title: $isSelfMuted
description: '$isSelfMuted es similar pero no confundir con `$isMuted`, esto comprobará si el usuario se silenció.'
id: isSelfMuted
---

$isSelfMuted es similar pero no confundir con `$isMuted`, esto comprobará si el usuario se silenció.

## Uso

```php
$isSelfMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                             | Requerido |
| ----------- | ------ | ------------------------------------------------------ |:---------:|
| usarioID?   | entero | ID del usuario que desea comprobar si está silenciado. |    no     |
| servidorID? | entero | ID del gremio donde están silenciados.                 |    no     |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de si estás silenciado (canal de voz) o no:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
