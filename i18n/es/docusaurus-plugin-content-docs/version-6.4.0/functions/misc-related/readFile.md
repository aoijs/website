---
title: '$readFile'
description: '$readFile leerá el contenido de un archivo y lo devolverá.'
id: readFile
---

`$readFile` leerá el contenido de un archivo y lo devolverá.

## Uso

```php
$readFile[camino]
```

## Parámetros

| Campo  | Tipo   | Parámetros       | Requerido |
| ------ | ------ | ---------------- |:---------:|
| camino | cadena | Ruta del archivo | verdadera |

## Ejemplo(s)

Esto devolverá su archivo principal (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```