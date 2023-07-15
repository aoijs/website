---
title: '$isValidImageLink'
description: '$isValidImageLink will check if the given image link is valid.'
id: isValidImageLink
---

`$isValidImageLink` will check if the given image link is valid.

## प्रोयोग

```php
$isValidImageLink[URL]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन       | चाहिए |
| ----- | -------- | ------------------ |:-----:|
| URL   | स्ट्रिंग | Direct Image link. | true  |

## ट्रू (हा)

This will return `true` as the given image link is valid:

```javascript
bot.command({
    name: 'isValidImageLink',
    code: `
  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]
  `
});
```
