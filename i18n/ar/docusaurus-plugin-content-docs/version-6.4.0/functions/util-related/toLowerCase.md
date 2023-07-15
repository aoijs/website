---
title: '$toLowerCase'
description: '$toLowerCase will change the given text from uppercase to lowercase.'
id: toLowerCase
---

`$toLowerCase` will change the given text from uppercase to lowercase.

## الاستخدام

```php
$toLowerCase[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                     | مطلوب |
| ----- | ------ | -------------------------------- |:-----:|
| text  | string | The text to change to lowercase. | true  |

## مثال

This will everything given to lowercase, in this case it would return `aoi.js is great.`:

```javascript
bot.command({
    name: "toLowerCase",
    code: `
    $toLowerCase[AOI.JS IS GREAT.]
    `
});
```