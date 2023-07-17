---
title: '$guildCooldown'
description: '$guildCooldown establecerá un tiempo de enfriamiento para el gremio después de ser usado.'
id: guildCooldown
---

`$guildCooldown` establecerá un enfriamiento basado en gremios.

## Uso

```php
$guildCooldown[time;errorMessage]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$guildCooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                           | Requerido |
| ---------------- | -------- | -------------------------------------------------------------------- |:---------:|
| tiempo           | número   | La duración del enfriamiento.                                        | verdadero |
| mensaje de error | consulta | Mensaje de error cuando queda tiempo para el tiempo de enfriamiento. | verdadero |

## Ejemplo(s)

Esto establecerá un tiempo de reutilización para un comando que sólo se aplica al gremio y devolverá el tiempo de reutilización restante:

```javascript
bot.command({
    name: 'guildCooldown',
    code: `
  hola
  $guildCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
