---
title: $isMentionable
description: '$isMentionable comprueba si un rol dado es mencionable.'
id: isMentionable
---

`$isMentionable` comprueba si un rol determinado es mencionable.

## Uso

```php
$isMentionable[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                           | Requerido |
| ----------- | ------ | ---------------------------------------------------- |:---------:|
| roleID      | entero | El ID de rol para comprobar si es mencionable o no.  | verdadero |
| servidorID? | entero | ID de la hermandad en la que está presente el papel. |    no     |

## Ejemplo(s)

Esto comprobará si un rol con el nombre `Propietario` es mencionado y devuelve `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```
