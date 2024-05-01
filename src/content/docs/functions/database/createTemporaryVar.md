---
title: $createTemporaryVar
description: $createTemporaryVar will create a new variable.
id: createTemporaryVar
---

`$createTemporaryVar` will create a new variable.

## Usage

```php
$createTemporaryVar[table;...vars]
```

## Parameters

| Field   | Type                                                                                              | Description                                        | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| table   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.                                    |   true   |
| ...vars | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name and value, separated by colon (`:`). |   true   |

## Example(s)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
client.command({
    name: "createTemporaryVar",
    code: `
  $createTemporaryVar[main;variable:value]
  `
});
```

This will create two new variables with names "variable1" and "variable2", with "value1" and "value2" as the values respectively.

```javascript
client.command({
    name: "createTemporaryVar",
    code: `
  $createTemporaryVar[main;variable1:value1;variable2:value2]
  `
});
```

You can add more variables by adding another pair of variable names and values, ensuring that each variable is separated with semicolons.
