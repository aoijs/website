---
title: '$multi'
description: '$multi operation / multiplication.'
id: multi
---

`$multi` will multiplicate given numbers.

## प्रोयोग

```php
$multi[num;num]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                  | चाहिए |
| ----- | ------ | ----------------------------- |:-----:|
| num   | number | Numbers you want to multiply. | true  |

## ट्रू (हा)

This will return `72` as `8*9` equals that:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
