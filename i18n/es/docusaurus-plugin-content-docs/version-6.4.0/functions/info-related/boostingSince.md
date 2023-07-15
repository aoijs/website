---
title: '$boostingSince'
description: '$boostingSince devolverá la fecha en la que alguien empezó a mejorar un servidor específico.'
id: boostingSince
---

`$boostingSince` devolverá la fecha en la que alguien empezó a mejorar un servidor específico.

## Modo de uso

```php
$boostingSince[servidorID?;usarioID?;formato?]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                                                     | Requerido |
| ----------- | ------ | ----------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | El ID del servidor en el que quieres comprobar cuánto tiempo lleva una persona haciendo mejora. |    no     |
| usarioID?   | entero | El ID de usuario del que desea comprobar la fecha de inicio de la mejora.                       |    no     |
| formato?    | cadena | El formato en el que se devolverá la fecha, que se indica a continuación.                       |   falso   |

| Formato |                                                                 |
| ------- | --------------------------------------------------------------- |
| ms      | 1652643158052                                                   |
| date    | Sun May 15 2022 20:32:38 GMT+0100 (Horario de verano británico) |

## Ejemplo(s)

Esto devolverá la fecha en la que empezaste a mejorar (no funcionará cuando no estés mejorando):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```