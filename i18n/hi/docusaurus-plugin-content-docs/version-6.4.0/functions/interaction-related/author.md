---
title: '$author'
description: '$author will add an author field to an embed.'
id: author
---

`$author` will add an author field to an embed.

## प्रोयोग

```php
$author[index?;name;iconURL?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                               |    चाहिए     |
| -------- | -------- | ---------------------------------------------------------- |:------------:|
| index?   | integer  | Embed index.                                               | असत्य (नहीं) |
| name     | स्ट्रिंग | Author title that will be displayed.                       |     true     |
| iconURL? | स्ट्रिंग | Icon URL which will be displayed next to the author title. | असत्य (नहीं) |

## ट्रू (हा)

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
