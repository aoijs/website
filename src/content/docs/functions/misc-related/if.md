---
title: $if
description: $if will check a condition and return either true or false depending on the condition being true or false.
id: if
---

`$if` will check a condition and return either true or false depending on the condition being true or false.

## Usage

```php
$if[condition;true;false?]
```

:::caution[Deprecation]

`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::

## Parameters

| Field     | Type   | Description                                 | Required |
| --------- | ------ | ------------------------------------------- | :------: |
| condition | string | Condition to check.                         |   true   |
| true      | string | What to return when the condition is true.  |   true   |
| false?    | string | What to return when the condition is false. |  false   |

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
| &&       | logical AND              |

## Example(s)

This will return `That's false!` as `1` doesn't equal `2`:

```javascript
client.command({
  name: "if",
  code: `
    $if[1==2;That's true!;That's false!]
    `
});
```

This will do the exact same just different usage of `$if` by using `$if: "old"`:

```javascript
client.command({
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
