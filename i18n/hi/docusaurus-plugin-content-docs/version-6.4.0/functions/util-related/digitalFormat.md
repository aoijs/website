---
title: '$digitalFormat'
description: '$digitalFormat will return a digital formatted time converted from ms.'
id: digitalFormat
---

`$digitalFormat` will convert ms to digital formatted, readable time.

## प्रोयोग

```php
$digitalFormat[ms]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                             | चाहिए |
| ----- | ------ | ---------------------------------------- |:-----:|
| ms    | number | Time in miliseconds you wish to convert. | true  |

## ट्रू (हा)

This will return `00:04:00` as `240000ms` are four minutes:

```javascript
bot.command({
    name: 'digitalFormat',
    code: `
  $digitalFormat[240000]
  `
});
```
