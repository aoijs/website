---
title: '$fileExists'
description: '$fileExists verificará si existe un archivo determinado.'
id: fileExists
---

`$fileExists` verificará si existe un archivo determinado.

## Uso

```php
$fileExists[camino]
```

## Parámetros

| Campo  | Tipo   | Parámetros       | Requerido |
| ------ | ------ | ---------------- |:---------:|
| camino | string | Ruta del archivo | verdadera |

## Ejemplo(s)

Esto comprobará si existe un archivo llamado `index.js` en su directorio:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```