---
title: $ifAwaited
description: $ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.
id: ifAwaited
---

`$ifAwaited` will check a condition and executed an awaited command depending on the condition being true or false.

## Usage

```php
$ifAwaited[condition;true;false?]
```

## Parameters

| Field     | Type   | Description                             | Required |
| --------- | ------ | --------------------------------------- | :------: |
| condition | string | Condition to check                      |   true   |
| true      | string | What to do when the condition is true.  |   true   |
| false?    | string | What to do when the condition is false. |  false   |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=      | greater than or equal to |
| \>       | greater than             |
| <        | less than                |
| \|\|     | logical OR               |
| &&       | logical conjunction      |

## Example(s)

This will execute the `awaitedCommand` awaited command as the statement is true:

```javascript
client.command({
  name: "ifAwaited",
  code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `,
});

client.awaitedCommand({
  name: "awaitedCommand",
  code: `
    $sendMessage[That's true!;false]
    `,
});
```
