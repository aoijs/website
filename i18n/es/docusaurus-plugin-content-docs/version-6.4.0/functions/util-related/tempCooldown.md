---
title: $tempCooldown
description: '$tempCooldown creará un tiempo de reutilización para un comando.'
id: tempCooldown
---

`$tempCooldown` creará un tiempo de reutilización temporal para un comando.

## Uso

```php
$tempCooldown[time;id;errorMessage?]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$tempCooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                           | Requerido |
| ---------------- | -------- | -------------------------------------------------------------------- |:---------:|
| tiempo           | consulta | La duración del enfriamiento.                                        | verdadero |
| id               | consulta | Puede ser usuario, guild, mensaje, canal o cualquier otro ID.        | verdadero |
| mensaje de error | string   | Mensaje de error cuando queda tiempo para el tiempo de enfriamiento. |    sí     |

## Ejemplo(s)

Esto establecerá un tiempo de reutilización temporal para un comando que se aplica sólo una vez:

```javascript
bot.command({
    name: 'tempCooldown',
    code: `
  hola
  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]
  `
});
```
