---
title: '$thumbnail'
description: '$thumbnail añade una miniatura a una incrustación (imagen de esquina superior derecha).'
id: thumbnail
---

`$thumbnail` añade una miniatura a una incrustación (imagen de esquina superior derecha).

## Uso

```php
$thumbnail[indice?;URL]
```

## Parámetros

| Campo   | Tipo     | Parámetros                  | Requerido |
| ------- | -------- | --------------------------- |:---------:|
| índice? | número   | Insertar posición/índice.   |    no     |
| URL     | consulta | Miniatura URL de la imagen. | verdadero |

## Ejemplo(s)

Esto creará un incrustado con tu avatar de usuario:

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`
});
```