---
title: '$onlyIf'
description: '$onlyIf will check for a condition and return a error message if that condition does not match.'
id: onlyIf
---

`$onlyIf` will check for a condition and return a error message if that condition does not match.

## الاستخدام

```php
$onlyIf[condition;error]
```

## البارامترات

| Field     | النوع  | الديسكبربشين                                   | مطلوب |
| --------- | ------ | ---------------------------------------------- |:-----:|
| condition | string | Condition to check.                            | true  |
| error     | string | Error to return when condition does not match. | false |

## مثال

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