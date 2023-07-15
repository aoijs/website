---
title: '$addTimestamp'
description: '$addTimestamp will add a timestamp to an embed.'
id: addTimestamp
---

`$addTimestamp` will add a timestamp to an embed.

## प्रोयोग

```php
$addTimestamp[ms?]
```

## पैरामीटर्स

| फील्ड | टाइप    | डिस्क्रिप्शन |    चाहिए     |
| ----- | ------- | ------------ |:------------:|
| ms    | integer | Epoch Time.  | असत्य (नहीं) |

## ट्रू (हा)

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
