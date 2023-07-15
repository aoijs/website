---
title: '$random'
description: '$random will generate a random number between your chosen span.'
id: random
---

`$random` will generate a random number between your chosen span.

## प्रोयोग

```php
$random[num1;num2;allow?;random?]
```

## पैरामीटर्स

| फील्ड                        | टाइप    | डिस्क्रिप्शन                           |    चाहिए     |
| ---------------------------- | ------- | -------------------------------------- |:------------:|
| num1                         | number  | Start of the span.                     |     true     |
| num2                         | number  | End of the span.                       |     true     |
| allow?                       | boolean | Allows returning of decimal numbers.   | असत्य (नहीं) |
| [random?](#advanced-Example) | boolean | If the returned number will be random. | असत्य (नहीं) |

## ट्रू (हा)

This will return a random number between `20` and `250`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[20;250]
  `
});
```

### Advanced Example

This will return a random decimal number between `25` and `50`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[25;50;true]  
  `
});
```

This will return a random number between `45` and `64` and the second `$random` will be random as well:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[45;65;false;true]
  $random[45;65;false;true]
  `
});
```
