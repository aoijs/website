---
title: '$let'
description: '$let is used for storing temporary variables.'
id: let
---

`$let` will store temporary variables which can be retrieved by `$get`.

## प्रोयोग

```php
$let[varname;value]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                      | चाहिए |
| ------- | -------- | ------------------------------------------------- |:-----:|
| varname | स्ट्रिंग | Name of the temporary variable.                   | true  |
| value   | स्ट्रिंग | Value of the temporary variable you want to save. | true  |

## ट्रू (हा)

This will return `Ayaka` from `$get`:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
