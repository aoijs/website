---
title: $arrayEvery
description: $arrayEvery will test whether all elements in the array pass the condition.
id: arrayEvery
---

`$arrayEvery` will test whether all elements in the array pass the condition.

## Usage

```php
$arrayEvery[name;query;queryType?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                         | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                                                         |   true   |
| query     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The element we will be queering for every element inside the array. |   true   |
| queryType | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The comparison operator.                                            |  false   |

## Comparison Operators

- `includes` — Including
- `startsWith` — Starts with
- `endsWith` — Ends with
- `==` — Equal to
- `!=` — Not equal to
- `>` — Greater than
- `<` — Less than
- `>=` — Greater than or equal to
- `<=` — Less than or equal to

## Example(s)

```javascript
client.command({
  name: "array-every",
  code: `
  $arrayEvery[array;30;==]
  $createArray[array;1;2;3;0;30]
  `,
  // It will return "false". Cause 1 ≠ 30. You can think it as "and (&&)" logical operator.
});
```
