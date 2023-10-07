---
title: $getUserVar
description: $getUserVar will return the value of a given user variable.
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## Usage

```php
$getUserVar[varname;userID?;id?;table?]
```

## Parameters

| Field   | Type            | Description                               | Required |
| ------- | --------------- | ----------------------------------------- | :------: |
| varname | string          | Variable name.                            |   true   |
| userID? | integer         | User ID.                                  |  false   |
| id?     | string, integer | 1. **specific guild id** <br /> 2. **dm** |  false   |
| table?  | string          | Variable table.                           |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
  name: "getUserVar",
  code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```
