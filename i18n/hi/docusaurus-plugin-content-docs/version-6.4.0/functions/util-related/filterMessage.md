---
title: '$filterMessage'
description: '$filterMessage will filter certain characters out of given text.'
id: filterMessage
---

`$filterMessage` will filter certain characters out of given text.

## प्रोयोग

```php
$filterMessage[text;...letters]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                  | चाहिए |
| ------- | -------- | --------------------------------------------- |:-----:|
| text    | स्ट्रिंग | Text input which will be filtered.            | true  |
| letters | स्ट्रिंग | Content you want to filter out of the `text`. | true  |

## ट्रू (हा)

This will remove the `N` of `Never` and return `ever`:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```
