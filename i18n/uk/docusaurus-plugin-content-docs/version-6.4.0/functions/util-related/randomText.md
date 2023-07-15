---
title: '$randomText'
description: '$randomText will return a random word out of the given query'
id: randomText
---

`$randomText` will return a random word out of the given query

## Використання

```php
$randomText[text;text;...]
```

## Параметри

| Поле | Тип   | Опис                                                        | Обов'язковий |
| ---- | ----- | ----------------------------------------------------------- |:------------:|
| text | рядок | Any words/sentences/letters you want to be chosen randomly. |     так      |

## Приклад(и)

This will return a random text out of `Hello, Bye, Goodnight, See you`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
