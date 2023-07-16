---
title: '$globalCooldown'
description: '$globalCooldown establecerá un tiempo de reutilización global para un comando.'
id: globalCooldown
---

`$globalCooldown` establecerá un tiempo de recarga global para un comando.

## Uso

```php
$globalCooldown[time;errorMessage]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$globalCooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                            | Requerido |
| ---------------- | -------- | --------------------------------------------------------------------- |:---------:|
| tiempo           | consulta | La duración del enfriamiento.                                         | verdadero |
| mensaje de error | consulta | Mensaje de error dado cuando queda tiempo del tiempo de enfriamiento. | verdadero |

## Ejemplo(s)

Esto devolverá `Hola` y evitará que cualquiera ejecute el comando de nuevo durante otros cinco minutos:

```javascript
bot.command({
    name: 'globalCooldown',
    code: `
  Hola
  $globalCooldown[5m;Please wait %time% to execute this command again.]
  `
});
```
