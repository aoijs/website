---
title: '$charCount'
description: '$charCount will count the given characters in a text and return the amount of characters.'
id: charCount
---

`$charCount` will count the given characters in a text and return the amount of characters.

## الاستخدام

```php
$charCount[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                           | مطلوب |
| ----- | ------ | ------------------------------------------------------ |:-----:|
| text  | string | The text that will be the character count returned of. | true  |

## مثال

This will return `77` as there are 77 characters in this text:

```javascript
bot.command({
    name: 'charCount',
    code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `
});
```
