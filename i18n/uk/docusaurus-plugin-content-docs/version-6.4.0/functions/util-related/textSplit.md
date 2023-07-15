---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## Використання

```php
$textSplit[text;sep?]
```

## Параметри

| Поле | Тип   | Опис                              | Обов'язковий |
| ---- | ----- | --------------------------------- |:------------:|
| text | рядок | Query of arguments.               |     так      |
| sep? | рядок | Separator for the text arguments. |      ні      |

## Приклад(и)

This will return `hello, how are you`:

```javascript
bot.command({
    name: 'textSplit',
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```