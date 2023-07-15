---
title: '$footer'
description: '$footer will add a footer to an embed.'
id: footer
---

`$footer` will add a footer to an embed.

## الاستخدام

```php
$footer[index?;content;iconURL?]
```

## البارامترات

| Field    | النوع          | الديسكبربشين                     | مطلوب |
| -------- | -------------- | -------------------------------- |:-----:|
| index?   | number         | Embed index.                     | false |
| content  | string, number | Content of the footer text.      | true  |
| iconURL? | string         | Footer Icon (bottom left image). | false |

## مثال

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