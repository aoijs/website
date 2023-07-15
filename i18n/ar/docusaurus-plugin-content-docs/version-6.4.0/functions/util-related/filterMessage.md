---
title: '$filterMessage'
description: '$filterMessage will filter certain characters out of given text.'
id: filterMessage
---

`$filterMessage` will filter certain characters out of given text.

## الاستخدام

```php
$filterMessage[text;...letters]
```

## البارامترات

| Field   | النوع  | الديسكبربشين                                  | مطلوب |
| ------- | ------ | --------------------------------------------- |:-----:|
| text    | string | Text input which will be filtered.            | true  |
| letters | string | Content you want to filter out of the `text`. | true  |

## مثال

This will remove the `N` of `Never` and return `ever`:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```
