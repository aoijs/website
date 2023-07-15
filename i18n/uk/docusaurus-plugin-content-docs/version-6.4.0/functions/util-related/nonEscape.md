---
title: '$nonEscape'
description: '$nonEscape will stop escaping special characters.'
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## Використання

```php
$nonEscape[message]
```

## Параметри

| Поле    | Тип   | Опис                               | Обов'язковий |
| ------- | ----- | ---------------------------------- | ------------ |
| message | рядок | Text you don't want to be escaped. | так          |

## Приклад(и)

This will stop from escaping certain characters:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
