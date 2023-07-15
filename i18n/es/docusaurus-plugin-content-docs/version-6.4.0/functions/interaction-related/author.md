---
title: '$author'
description: '$author agregará un campo de autor a un incrustado.'
id: author
---

`$author` añadirá un campo de autor a un incrustado.

## Uso

```php
$author[índice?;nombre;URL del icono?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                              | Requerido |
| -------------- | -------- | ------------------------------------------------------- |:---------:|
| índice?        | entero   | Incorporar índice.                                      |   falso   |
| name           | consulta | Título del autor que se mostrará.                       | verdadero |
| URL del icono? | string   | Icono URL que se mostrará al lado del título del autor. |   falso   |

## Ejemplo(s)

Esto creará un incrustado con descripción y título del autor:

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Hola!;$userAvatar[$authorID]]
  $description[Insertar con el autor!]
  `
});
```
