---
title: '$createFile'
description: '$createFile creará un adjunto.'
id: createFile
---

`$createFile` creará un archivo adjunto.

## Uso

```php
$createFile[adjunto;nombre]
```

## Parámetros

| Campo   | Tipo     | Parámetros                     | Requerido |
| ------- | -------- | ------------------------------ |:---------:|
| adjunto | consulta | El contenido del archivo.      | verdadero |
| name    | consulta | El nombre del archivo adjunto. | verdadero |

## Ejemplo(s)

Esto creará un archivo de texto llamado **`example.txt`** con el texto "¡Este es un ejemplo!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
