---
title: $createVar
description: $createVar will create a new variable.
id: createVar
---

`$createVar` will create a new variable.

## Usage

```php
$createVar[table;...vars]
```

## Parameters

| Field   | Type   | Description              | Required |
| ------- | ------ | ------------------------ | :------: |
| table   | string | Variable table.          |   true   |
| ...vars | string | Variable name and value. |   true   |

## Example(s)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```