---
title: '$findChannel'
description: '$findChannel buscará un canal determinado por su nombre.'
id: findChannel
---

`$findChannel` buscará un canal determinado por su nombre.

## Uso

```php
$findChannel[canalResolver;returnSelf?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                                                    | Requerido |
| --------------- | -------- | --------------------------------------------------------------------------------------------- |:---------:|
| canalResolver   | cadena   | El nombre del artefacto que quieres buscar.                                                   | verdadero |
| volverYo mismo? | booleano | Devuelve el canal donde el comando se ejecuta por defecto si el canal dado no fue encontrado. |   falso   |

## Ejemplo(s)

Esto devolverá `882360051640193054` ya que fue capaz de encontrar el canal `#á-aoi_v6`:

```javascript
bot.command({
    name: 'findChannel',
    code: `
  $findChannel[⊂・⊃﹐aoi_v6;false]
  `
});
```
