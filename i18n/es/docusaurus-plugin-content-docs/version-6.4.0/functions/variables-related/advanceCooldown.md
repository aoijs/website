---
title: '$advanceCooldown'
description: '$advanceCooldown establecerá un tiempo de reutilización para un ID dado.'
id: advanceCooldown
---

`$advanceCooldown` establecerá un tiempo de enfriamiento para un ID determinado.

## Uso

```php
$advanceCooldown[time;id;errorMessage]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$cooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                              | Requerido |
| ---------------- | -------- | ----------------------------------------------------------------------- |:---------:|
| tiempo           | consulta | Texto a separar.                                                        | verdadero |
| id               | entero   | Texto a separar.                                                        | verdadero |
| mensaje de error | string   | Mensaje de error que se mostrará cuando haya tiempo de espera restante. |    sí     |

## Ejemplo(s)

Esto establecerá un tiempo de reutilización para el gremio donde ejecutas el comando y devolverá el tiempo restante de enfriamiento:

```javascript
bot.command({
    name: 'advanceCooldown',
    code: `
  $advanceCooldown[2m;$guildID;]
  `
});
```