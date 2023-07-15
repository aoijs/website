---
title: '$modulo'
description: '$modulo operation / the remainder when dividing.'
id: modulo
---

`$modulo` operation / the remainder when dividing.

## प्रोयोग

```php
$modulo[num;num]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                         | चाहिए |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to return the raimainder of. | true  |

## ट्रू (हा)

This will return `2` as it's the remainder of `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
