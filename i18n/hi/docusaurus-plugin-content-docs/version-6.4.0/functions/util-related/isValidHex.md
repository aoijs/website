---
title: '$isValidHex'
description: '$isValidHex will check if the given hex / decimal color is valid.'
id: isValidHex
---

`$isValidHex` will check if the given hex / decimal color is valid.

## प्रोयोग

```php
$isValidHex[colorResolver]
```

## पैरामीटर्स

| फील्ड         | टाइप            | डिस्क्रिप्शन                | चाहिए |
| ------------- | --------------- | --------------------------- |:-----:|
| colorResolver | string, integer | Hex / decimal color string. | true  |

## ट्रू (हा)

This will return `true` as `#30dbd8` is an valid hex color:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[#30dbd8]
  `
});
```

This will return `true` as well as `80` is an valid hexadecimal color:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[80]
  `
});
```
