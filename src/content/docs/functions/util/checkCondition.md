---
title: $checkCondition
description: $checkCondition checks if a condition is either true or false.
id: checkCondition
---

`$checkCondition` checks if a condition is either true or false.

## Usage

```php
$checkCondition[condition]
```

## Parameters

| Field     | Type                                                                                              | Description                  | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | :------: |
| condition | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Condition you want to check. |   true   |

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

This will return `false` as `50` is greater than `25`:

```javascript
client.command({
  name: "checkCondition",
  code: `
  $checkCondition[50>25]
  `
});
```

### Advanced Example

#### Logical conjunction

This will return `true` as `50` is greater than `25` and `120` is less than `280`:

```javascript
client.command({
  name: "checkCondition",
  code: `
  $checkCondition[50>25&&120<280]
  `
});
```

#### Logical OR

This will return `true` as one of the two arguments (`50>25`) are `true`:

```javascript
client.command({
  name: "checkCondition",
  code: `
  $checkCondition[50>25||true==false]
  `
});
```
