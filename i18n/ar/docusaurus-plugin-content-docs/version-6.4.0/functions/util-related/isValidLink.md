---
title: '$isValidLink'
description: '$isValidLink will check if the given link is valid.'
id: isValidLink
---

`$isValidLink` will check if the given link is valid.

## الاستخدام

```php
$isValidLink[URL]
```

## البارامترات

| Field | النوع  | الديسكبربشين     | مطلوب |
| ----- | ------ | ---------------- |:-----:|
| URL   | string | Any kind of URL. | true  |

## مثال

This will return `true` as the given link is valid:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
