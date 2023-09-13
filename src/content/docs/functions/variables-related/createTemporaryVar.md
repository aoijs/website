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

| Field   | Type   | Description              | Required |
| ------- | ------ | ------------------------ | :------: |
| table   | string | Variable table.          |   true   |
| ...vars | string | Variable name and value. |   true   |

## Example(s)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
  name: "createTemporaryVar",
  code: `
  $createTemporaryVar[main;variable;value]
  `,
});
```
