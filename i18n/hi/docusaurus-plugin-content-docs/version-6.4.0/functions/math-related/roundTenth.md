---
title: '$roundTenth'
description: '$roundTenth will round to the next tenth.'
id: roundTenth
---

`$roundTenth` will round to the next tenth.

## प्रोयोग

```php
$roundTenth[number;decimalPosition]
```

## पैरामीटर्स

| फील्ड           | टाइप    | डिस्क्रिप्शन                                       | चाहिए |
| --------------- | ------- | -------------------------------------------------- |:-----:|
| number          | number  | Number to round.                                   | true  |
| decimalPosition | integer | How many numbers after the comma will be returned. | true  |

## ट्रू (हा)

This will return `503.70` as it's the nearest number to `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```