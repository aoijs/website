---
title: '$isValidLink'
description: '$isValidLink will check if the given link is valid.'
id: isValidLink
---

`$isValidLink` will check if the given link is valid.

## प्रोयोग

```php
$isValidLink[URL]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन     | चाहिए |
| ----- | -------- | ---------------- |:-----:|
| URL   | स्ट्रिंग | Any kind of URL. | true  |

## ट्रू (हा)

This will return `true` as the given link is valid:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
