---
title: '$mentionType'
description: '$mentionType will return the type of the mention.'
id: mentionType
---

`$mentionType` will return the type of the mention.

## Modo de uso

```php
$mentionType[content]
```

## Parámetros

| Campo     | Tipo   | Descripción                                      | Requerido |
| --------- | ------ | ------------------------------------------------ |:---------:|
| contenido | cadena | The mention whose mention type will be returned. | verdadero |

<details>
  <summary> <h3> Mention Types </h3></summary>

| Tipo     | Descripción                       |
| -------- | --------------------------------- |
| everyone | `@everyone` and `@here` mentions. |
| users    | All user mentions.                |
| roles    | All role mentions.                |
| all      | Everything listed above.          |

</details>

## Ejemplo(s)

This will return `users` as you're an user:

```javascript
bot.command({
    name: 'mentionType',
    code: `
  $mentionType[<@$authorID>]
  `
});
```
