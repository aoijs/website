---
title: $deleteVar
description: $deleteVar will delete a given variable.
id: deleteVar
---

`$deleteVar` will delete a given variable.

## Usage

```php
$deleteVar[variable;id;table?]
```

## Parameters

| Field    | Type                                                                                                                                                                                                 | Description                                   | Required |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Variable name.                                |   true   |
| id       | integer                                                                                                                                                                                              | ID of the variable to delete ( userID etc. ). |   true   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Variable table.                               |  false   |

## Example(s)

This will delete a variable called "Test":

```javascript
client.command({
  name: "deleteVar",
  code: `
  $deleteVar[Test;$authorID;main]
  `,
});
```
