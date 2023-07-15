---
title: '$if'
description: '$if will check a condition and return either true or false depending on the condition being true or false.'
id: if
---

`$if` will check a condition and return either true or false depending on the condition being true or false.

## प्रोयोग

```php
$if[condition;true;false?]
```

:::warning Deprecation


`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::


## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                |    चाहिए     |
| --------- | -------- | ------------------------------------------- |:------------:|
| condition | स्ट्रिंग | Condition to check.                         |     true     |
| true      | स्ट्रिंग | What to return when the condition is true.  |     true     |
| false?    | स्ट्रिंग | What to return when the condition is false. | असत्य (नहीं) |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical AND              |

## ट्रू (हा)

This will return `That's false!` as `1` doesn't equal `2`:

```javascript
bot.command({
    name: "if",
    code: `
    $if[1==2;That's true!;That's false!]
    `
});
```

This will do the exact same just different usage of `$if` by using `$if: "old"`:

```javascript
bot.command({
    name: "if",
    $if: "old",
    code: `
    $if[1==2]
    That's true!
    $else
    That's false!
    $endif
    `
});
```