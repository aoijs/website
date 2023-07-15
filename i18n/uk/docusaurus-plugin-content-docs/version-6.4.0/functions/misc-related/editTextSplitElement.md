---
title: '$editTextSplitElement'
description: '$editTextSplitElement will edit a specific text split element.'
id: editTextSplitElement
---

`$editTextSplitElement` will edit a specific text split element.

## Використання

```php
$editTextSplitElement[index;text]
```

## Параметри

| Поле   | Тип   | Опис                             | Обов'язковий |
| ------ | ----- | -------------------------------- |:------------:|
| індекс | рядок | Index of the text split element. |     так      |
| text   | рядок | New text split element.          |     так      |

## Приклад(и)

This will edit the 3rd text split element and change it to "Goodbye":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```