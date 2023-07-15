---
title: '$ifAwaited'
description: '$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.'
id: ifAwaited
---

`$ifAwaited` will check a condition and executed an awaited command depending on the condition being true or false.

## प्रोयोग

```php
$ifAwaited[condition;true;false?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                            |    चाहिए     |
| --------- | -------- | --------------------------------------- |:------------:|
| condition | स्ट्रिंग | Condition to check                      |     true     |
| true      | स्ट्रिंग | What to do when the condition is true.  |     true     |
| false?    | स्ट्रिंग | What to do when the condition is false. | असत्य (नहीं) |

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
| &&       | logical conjunction      |

## ट्रू (हा)

This will execute the `awaitedCommand` awaited command as the statement is true:

```javascript
bot.command({
    name: "ifAwaited",
    code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
    $sendMessage[That's true!;false]
    `
});
```