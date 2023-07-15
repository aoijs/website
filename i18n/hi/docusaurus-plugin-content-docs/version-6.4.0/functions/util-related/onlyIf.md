---
title: '$onlyIf'
description: '$onlyIf will check for a condition and return a error message if that condition does not match.'
id: onlyIf
---

`$onlyIf` will check for a condition and return a error message if that condition does not match.

## प्रोयोग

```php
$onlyIf[condition;error]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                   |    चाहिए     |
| --------- | -------- | ---------------------------------------------- |:------------:|
| condition | स्ट्रिंग | Condition to check.                            |     true     |
| error     | स्ट्रिंग | Error to return when condition does not match. | असत्य (नहीं) |

## ट्रू (हा)

This will return the error message as 5 does not equal to 3:

```javascript
bot.command({
    name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```