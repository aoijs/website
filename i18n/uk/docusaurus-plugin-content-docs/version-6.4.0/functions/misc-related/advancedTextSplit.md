---
title: '$advancedTextSplit'
description: '$advancedTextSplit will split multiple given arguments.'
id: advancedTextSplit
---

`$advancedTextSplit` will split multiple given arguments.

## Використання

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## Параметри

| Поле   | Тип     | Опис                                              | Обов'язковий |
| ------ | ------- | ------------------------------------------------- |:------------:|
| text   | рядок   | Text to split.                                    |     так      |
| sep    | рядок   | Separator which is used to split the values.      |     так      |
| індекс | integer | The position of the text you want to be returned. |     так      |

## Приклад(и)

This will split `Hello` from `Bye` and return `Hello`:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
