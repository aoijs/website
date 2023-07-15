---
title: '$indexOf'
description: '$indexOf will return the index of the given character.'
id: indexOf
---

`$indexOf` will return the index of the given character.

## Використання

```php
$indexOf[string;char]
```

## Параметри

| Поле  | Тип   | Опис                                            | Обов'язковий |
| ----- | ----- | ----------------------------------------------- |:------------:|
| рядок | рядок | The text the bot will be checking the index of. |     так      |
| char  | рядок | The characters the bot will be checking for.    |     так      |

## Приклад(и)

This will return `8` as it's the first occurring position of the character `w`:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```
