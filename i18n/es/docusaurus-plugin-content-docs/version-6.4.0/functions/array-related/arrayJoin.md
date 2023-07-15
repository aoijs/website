---
title: '$arrayJoin'
description: '$arrayJoin se unirá a la matriz con un separador dado.'
id: arrayJoin
---

`$arrayJoin` se unirá a la matriz con un separador dado.

## Uso

```php
$arrayJoin[nombre;separador?]
```

## Parámetros

| Campo      | Tipo   | Descripción      | Requerido |
| ---------- | ------ | ---------------- |:---------:|
| nombre     | cadena | Nombre de matriz | verdadero |
| separador? | cadena | Separador        |   falso   |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```