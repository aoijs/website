---
title: '$arrayEvery'
description: '$arrayEvery will test whether all elements in the array pass the condition.'
id: arrayEvery
---

`$arrayEvery` will test whether all elements in the array pass the condition.

## प्रोयोग

```php
$arrayEvery[name;query;queryType?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------------- |:------------:|
| name      | स्ट्रिंग | Array name.                                                         |     true     |
| query     | स्ट्रिंग | The element we will be queering for every element inside the array. |     true     |
| queryType | स्ट्रिंग | The comparison operator.                                            | असत्य (नहीं) |

## Comparison Operators

* `includes` — Including
* `startsWith` — Starts with
* `endsWith` — Ends with
* `==` — Equal to
* `!=` — Not equal to
* `>` — Greater than
* `<` — Less than
* `>=` — Greater than or equal to
* `<=` — Less than or equal to

## ट्रू (हा)

```javascript
bot.command({
    name: "array-every",
    code: `
  $arrayEvery[array;30;==]
  $createArray[array;1;2;3;0;30]
  `
    // It will return "false". Cause 1 ≠ 30. You can think it as "and (&&)" logical operator.
});
```
