---
title: '$textTrim'
description: '$textTrim will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.'
id: textTrim
---

`$textTrim` will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.

## Використання

```php
$textTrim[text]
```

## Параметри

| Поле | Тип   | Опис                    | Обов'язковий |
| ---- | ----- | ----------------------- |:------------:|
| text | рядок | The text to be trimmed. |     так      |

## Приклад(и)

This will remove any extra spaces of the given text, in this case it would return `Imagine a string package.`:

```javascript
bot.command({
    name: "textTrim",
    code: `
    $textTrim[      Imagine a string package      ]
    `
});
```