---
title: '$randomText'
description: '$randomText will return a random word out of the given query'
id: randomText
---

`$randomText` will return a random word out of the given query

## الاستخدام

```php
$randomText[text;text;...]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                | مطلوب |
| ----- | ------ | ----------------------------------------------------------- |:-----:|
| text  | string | Any words/sentences/letters you want to be chosen randomly. | true  |

## مثال

This will return a random text out of `Hello, Bye, Goodnight, See you`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
