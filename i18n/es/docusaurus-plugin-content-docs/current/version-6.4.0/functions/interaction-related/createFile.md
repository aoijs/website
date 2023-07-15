---
title: '$createFile'
description: '$createFile will create a file attachment.'
id: createFile
---

`$createFile` will create a file attachment.

## Modo de uso

```php
$createFile[attachment;name]
```

## Parámetros

| Campo      | Tipo     | Parámetros                  | Requerido |
| ---------- | -------- | --------------------------- |:---------:|
| attachment | consulta | Content of the file.        | verdadero |
| name       | consulta | The name of the attachment. | verdadero |

## Ejemplo(s)

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
