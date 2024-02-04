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

| Field   | Type                                                                                              | Description              | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| table   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.          |   true   |
| ...vars | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name and value. |   true   |

## Example(s)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
client.command({
  name: "createTemporaryVar",
  code: `
  $createTemporaryVar[main;variable;value]
  `
});
```
