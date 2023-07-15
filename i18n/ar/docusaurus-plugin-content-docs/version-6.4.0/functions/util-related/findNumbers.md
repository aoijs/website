---
title: '$findNumbers'
description: '$findNumbers will attempt to return all numbers in a message of a given text.'
id: findNumbers
---

`$findNumbers` will attempt to return all numbers in a message of a given text.

## الاستخدام

```php
$findNumbers[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                         | مطلوب |
| ----- | ------ | ------------------------------------ |:-----:|
| text  | string | Text where you want to find numbers. | true  |

## مثال

This will return `25` and remove `Hello, I'm [..] years old` from the given text:

```javascript
bot.command({
    name: 'findNumbers',
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
