---
title: '$findSpecialChars'
description: '$findSpecialChars will return all special characters of the given argument.'
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## प्रोयोग

```php
$findSpecialChars[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                    | चाहिए |
| ----- | -------- | ----------------------------------------------- |:-----:|
| text  | स्ट्रिंग | Text where you want to find special characters. | true  |

## ट्रू (हा)

This will return `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
