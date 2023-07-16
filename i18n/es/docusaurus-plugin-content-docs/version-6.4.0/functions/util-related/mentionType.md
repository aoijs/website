---
title: '$mentionType'
description: '$mentionType devolverá el tipo de mención.'
id: mentionType
---

`$mentionType` devolverá el tipo de mención.

## Uso

```php
$mentionType[content]
```

## Parámetros

| Campo     | Tipo   | Descripción                                    | Requerido |
| --------- | ------ | ---------------------------------------------- |:---------:|
| contenido | cadena | La mención cuyo tipo de mención será devuelta. | verdadero |

<details>
  <summary> <h3> Tipos de Mención </h3></summary>

| Tipo     | Descripción                      |
| -------- | -------------------------------- |
| todos    | `@everyone` y `@aquí` menciones. |
| usuarios | Todos los usuarios mencionan.    |
| roles    | Todos los papeles mencionan.     |
| all      | Todo lo enumerado anteriormente. |

</details>

## Ejemplo(s)

Esto devolverá `users` como usuario:

```javascript
bot.command({
    name: 'mentionType',
    code: `
  $mentionType[<@$authorID>]
  `
});
```
