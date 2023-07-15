---
title: '$author'
description: '$author will add an author field to an embed.'
id: author
---

`$author` will add an author field to an embed.

## الاستخدام

```php
$author[index?;name;iconURL?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                               | مطلوب |
| -------- | ------- | ---------------------------------------------------------- |:-----:|
| index?   | Integer | Embed index.                                               | false |
| name     | string  | Author title that will be displayed.                       | true  |
| iconURL? | string  | Icon URL which will be displayed next to the author title. | false |

## مثال

This will create an embed with description and author title:

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Hello!;$userAvatar[$authorID]]
  $description[Embed with author!]
  `
});
```
