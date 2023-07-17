---
title: $arrayAt
description: "$arrayAt elegirá el índice (posición) del elemento de matriz que se devolverá.\n  No devuelve nada si no se puede encontrar el índice dado."
id: arrayAt
---

`$arrayAt` elegirá el índice (posición) del array que se debe devolver. Se va a devolver nada si el índice dado no se encuentra.

## Modo de Uso

```php
$arrayAt[nombre;índice]
```

## Parámetros

| Campo  | Tipo   | Descripción               | Requerido |
| ------ | ------ | ------------------------- |:---------:|
| nombre | string | Nombre del array.         |    sí     |
| índice | string | La posición del elemento. |    sí     |

## Ejemplo(s)

- Esto devolvera `Aoi.dashboard`:

```javascript
bot.command({
    name: "array-at",
    code: `
  $arrayAt[Aoi;3]

  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `
    // Regresara "Aoi.dashboard"
});
```
