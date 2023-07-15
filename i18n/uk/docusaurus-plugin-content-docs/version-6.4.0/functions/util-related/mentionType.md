---
title: '$mentionType'
description: '$mentionType will return the type of the mention.'
id: mentionType
---

`$mentionType` will return the type of the mention.

## Використання

```php
$mentionType[content]
```

## Параметри

| Поле    | Тип   | Опис                                             | Обов'язковий |
| ------- | ----- | ------------------------------------------------ |:------------:|
| content | рядок | The mention whose mention type will be returned. |     так      |

<details>
  <summary> <h3> Mention Types </h3></summary>

| Тип      | Опис                              |
| -------- | --------------------------------- |
| everyone | `@everyone` and `@here` mentions. |
| users    | All user mentions.                |
| roles    | All role mentions.                |
| all      | Everything listed above.          |

</details>

## Приклад(и)

This will return `users` as you're an user:

```javascript
bot.command({
    name: 'mentionType',
    code: `
  $mentionType[<@$authorID>]
  `
});
```
