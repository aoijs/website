---
title: $arrange
description: $arrange will arrange a given list of numbers.
id: arrange
---

`$arrange` returns the given numbers in ascending or descending order.

## Usage

```php
$arrange[order;separator;...numbers]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                      | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | :------: |
| order      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | **asc** (ascending), or **desc** (descending): the order in which the numbers will be sorted in. |   true   |
| separator  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator which separates the numbers.                                                       |   true   |
| ...numbers | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The numbers to sort.                                                                             |   true   |


## Example(s)

This will sort the following numbers: (returns: `1, 2, 3, 4, 5, 6)`)

```javascript
client.command({
  name: "arrange",
  code: `
$arrange[asc;, ;1;6;4;2;5;3]
  `
});
```
