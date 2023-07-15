---
title: '$sub'
description: '$sub will substract two given numbers.'
id: sub
---

`$sub` will substract two given numbers.

## प्रोयोग

```php
$sub[num;num]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                         | चाहिए |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to perform calculation with. | true  |

## ट्रू (हा)

This will return `65` as `70-5` equals `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```