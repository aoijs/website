---
title: '$getCooldownTime'
description: '$getCooldownTime devolverá el tiempo de enfriamiento de un comando determinado.'
id: getCooldownTime
---

`$getCooldownTime` devolverá el tiempo de enfriamiento de un comando dado.

## Uso

```php
$getCooldownTime[tiempo;tipo;comando;id]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                                                                                                                     | Requerido |
| ------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| tiempo  | cadena | El tiempo de enfriamiento.                                                                                                                                     | verdadero |
| tipo    | cadena | Tipo de enfriamiento <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** | verdadero |
| Comando | cadena | Nombre del comando                                                                                                                                             | verdadero |
| id      | entero | Usuario/servidor/canal/mensaje ID.                                                                                                                             | verdadero |

## Ejemplo(s)

Esto devolverá el tiempo de espera restante del comando "getCooldownTime":

```javascript
bot.command({
    name: "getCooldownTime",
    code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `
});
```