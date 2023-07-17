---
title: '$channelCooldown'
description: '$channelCooldown establecerá un enfriamiento vinculado a un canal específico después de la ejecución del comando.'
id: channelCooldown
---

`$channelCooldown` establecerá un enfriamiento basado en canales.

## Uso

```php
$channelCooldown[time;errorMessage]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$channelCooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                                        | Requerido |
| ---------------- | -------- | --------------------------------------------------------------------------------- |:---------:|
| tiempo           | consulta | Temporizador del tiempo de espera                                                 | verdadero |
| mensaje de error | consulta | Mensaje de error cuando el temporizador de enfriamiento dado todavía está activo. |    no     |

## Ejemplo(s)

Esto establecerá un tiempo de reutilización para un comando en el canal en el que se ejecutó el comando y devuelve el tiempo de reutilización restante:

```javascript
bot.command({
    name: 'channelCooldown',
    code: `
  hola
  $channelCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
