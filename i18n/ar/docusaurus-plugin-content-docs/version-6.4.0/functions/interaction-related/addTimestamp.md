---
title: '$addTimestamp'
description: '$addTimestamp will add a timestamp to an embed.'
id: addTimestamp
---

`$addTimestamp` will add a timestamp to an embed.

## الاستخدام

```php
$addTimestamp[ms?]
```

## البارامترات

| Field | النوع   | الديسكبربشين | مطلوب |
| ----- | ------- | ------------ |:-----:|
| ms    | Integer | Epoch Time.  | false |

## مثال

This will create a embed with timestamp and description:

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Hello!]
  $addTimestamp
  `
});
```
