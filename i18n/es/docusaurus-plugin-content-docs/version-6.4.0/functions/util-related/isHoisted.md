---
title: '$isHoisted'
description: '$isHoisted comprobará si un rol específico está levantado.'
id: isHoisted
---

`$isHoisted` comprobará si un rol específico está aumentado.

## Uso

```php
$isHoisted[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                 | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| roleID      | entero | ID del rol que quieres comprobar si está elevado o no.                     | verdadero |
| servidorID? | entero | El ID de la hermandad donde quieres comprobar si el rol está elevado o no. |    no     |

## Ejemplo(s)

Esto comprobará si un rol llamado `Propietario` está elevado en tu servidor:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```
