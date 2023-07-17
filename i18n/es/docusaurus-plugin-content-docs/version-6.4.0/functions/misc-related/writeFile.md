---
title: '$writeFile'
description: '$writeFile renombrará un archivo del directorio de tu bot.'
id: writeFile
---

`$writeFile` renombrará un archivo del directorio de tu bot.

## Uso

```php
$writeFile[camino;texto;codificación?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                              | Requerido |
| ------------ | -------- | --------------------------------------- |:---------:|
| camino       | consulta | Dónde crear el archivo.                 | verdadero |
| text         | consulta | Cuál debe ser el contenido del archivo. | verdadero |
| codificación | string   | Codificación de texto/archivo.          |   falso   |

## Ejemplo(s)

Esto será un archivo llamado "testing.txt" con el contenido de "¡Hola!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```