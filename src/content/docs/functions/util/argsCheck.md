---
title: $argsCheck
description: $argsCheck will check the arguments of what the user typed and the required one, if requirements didn't meet, it will return an error message.
id: argsCheck
---

`$argsCheck` will check the arguments of user typed and the required one, if requirements didn't meet, it will return an
error message.

## Usage

```php
$argsCheck[condition;errorMessage]
```

## Parameters

| Field        | Type                                                                                              | Description                              | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| condition    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Condition to be made.                    |   true   |
| errorMessage | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message if condition did not meet. |   true   |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| \<=      | less than or equal to    |
| \>=      | greater than or equal to |
| \>       | greater than             |
| \<       | less than                |
| \|\|     | logical OR               |
| &&       | logical conjunction      |

## Example(s)

This returns: Greater than 2 arguments if condition met, else it will return an error message.

```javascript
client.command({
    name: "argsCheck",
    code: `
  You have more than two arguments, nice!

  $argsCheck[>2;You have less than two arguments!]
  `
});
```
