---
title: '$renameFile'
description: '$renameFile renombrará un archivo del directorio de tu bot.'
id: renameFile
---

`$renameFile` renombrará un archivo del directorio de tu bot.

## Uso

```php
$renameFile[archivo antiguo;archivo nuevo]
```

## Parámetros

| Campo           | Tipo   | Parámetros                 | Requerido |
| --------------- | ------ | -------------------------- |:---------:|
| archivo antiguo | cadena | Nombre de archivo antiguo. | verdadero |
| Archivo nuevo   | cadena | Nuevo nombre de archivo    | verdadero |

## Ejemplo(s)

Esto cambiará su index.js a un archivo index.txt:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```