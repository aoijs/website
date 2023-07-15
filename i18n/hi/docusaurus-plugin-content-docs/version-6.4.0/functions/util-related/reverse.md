---
title: '$reverse'
description: '$reverse will reverse given text.'
id: reverse
---

`$reverse` will reverse given text.

## प्रोयोग

```php
$reverse[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन              | चाहिए |
| ----- | -------- | ------------------------- |:-----:|
| text  | स्ट्रिंग | Text you want to reverse. | true  |

## ट्रू (हा)

This will the following text readable:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```