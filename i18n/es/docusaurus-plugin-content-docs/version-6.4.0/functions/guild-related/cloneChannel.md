---
title: '$cloneChannel'
description: '$cloneChannel clona un canal.'
id: cloneChannel
---

`$cloneChannel` clona un canal.

## Uso

```php
$cloneChannel[canalID;nombre;ID de retorno?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                            | Requerido |
| -------------- | -------- | ----------------------------------------------------- |:---------:|
| canalID        | entero   | El ID del canal que es para clonar.                   | verdadero |
| nombre         | consulta | El nuevo nombre del canal clonado.                    | verdadero |
| ID de retorno? | cadena   | Si la función devuelve el ID del canal recién creado. |   falso   |

**No clonará ningún mensaje de ese canal.**

## Ejemplo(s)

Esto clonará el canal actual y lo llamará "nuevo canal":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```
