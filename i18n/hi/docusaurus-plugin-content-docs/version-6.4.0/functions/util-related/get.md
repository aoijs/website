---
title: '$get'
description: '$get is used for retrieving temporary variables.'
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## प्रोयोग

```php
$get[var]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                             | चाहिए |
| ----- | -------- | ---------------------------------------- |:-----:|
| var   | स्ट्रिंग | Temporary variable you want to retrieve. | true  |

## ट्रू (हा)

This will return `Leref` from `$let`:

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
