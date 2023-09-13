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

| Field    | Type           | Description                                   | Required |
| -------- | -------------- | --------------------------------------------- | :------: |
| variable | string, number | Variable name.                                |   true   |
| id       | integer        | ID of the variable to delete ( userID etc. ). |   true   |
| table?   | string         | Variable table.                               |  false   |

## Example(s)

This will delete a variable called "Test":

```javascript
bot.command({
  name: "deleteVar",
  code: `
  $deleteVar[Test;$authorID;main]
  `,
});
```
