---
title: '$toUpperCase'
description: '$toUpperCase will change the given text from lowercase to uppercase.'
id: toUpperCase
---

`$toUpperCase` will change the given text from lowercase to uppercase.

## الاستخدام

```php
$toUpperCase[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                     | مطلوب |
| ----- | ------ | -------------------------------- |:-----:|
| text  | string | The text to change to uppercase. | true  |

## مثال

This will everything given to uppercase, in this case it would return `THIS IS AN EXAMPLE`:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```