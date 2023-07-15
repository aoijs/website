---
title: '$footer'
description: '$footer will add a footer to an embed.'
id: footer
---

`$footer` will add a footer to an embed.

## Використання

```php
$footer[index?;content;iconURL?]
```

## Параметри

| Поле     | Тип            | Опис                             | Обов'язковий |
| -------- | -------------- | -------------------------------- |:------------:|
| index?   | number         | Embed index.                     |      ні      |
| content  | string, number | Content of the footer text.      |     так      |
| iconURL? | рядок          | Footer Icon (bottom left image). |      ні      |

## Приклад(и)

This will create an embed with a footer and title:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `
});
```