---
title: $cooldown
description: '$cooldown establecerá un tiempo de reutilización para el autor del comando después de ser usado.'
id: cooldown
---

`$cooldown` establecerá un tiempo de espera basado en el usuario.

## Uso

```php
$cooldown[tiempo;mensaje de error
]
```

* Puedes recuperar el tiempo de enfriamiento restante en la función `$cooldown` usando **`%time%`** o cualquiera de los siguientes a continuación.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%` `%ms%`, `%fullTime%`

## Parámetros

| Campo            | Tipo     | Parámetros                                                           | Requerido |
| ---------------- | -------- | -------------------------------------------------------------------- |:---------:|
| tiempo           | consulta | La duración del enfriamiento.                                        | verdadero |
| mensaje de error | consulta | Mensaje de error cuando queda tiempo para el tiempo de enfriamiento. | verdadero |

## Ejemplo(s)

Esto establecerá un tiempo de espera para un comando que sólo se aplica al usuario y devuelve el tiempo de espera restante:

```javascript
bot.command({
    name: 'cooldown',
    code: `
  hola
  $cooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
