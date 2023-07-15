---
title: '$toUpperCase'
description: '$toUpperCase will change the given text from lowercase to uppercase.'
id: toUpperCase
---

`$toUpperCase` will change the given text from lowercase to uppercase.

## Використання

```php
$toUpperCase[text]
```

## Параметри

| Поле | Тип   | Опис                             | Обов'язковий |
| ---- | ----- | -------------------------------- |:------------:|
| text | рядок | The text to change to uppercase. |     так      |

## Приклад(и)

This will everything given to uppercase, in this case it would return `THIS IS AN EXAMPLE`:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```