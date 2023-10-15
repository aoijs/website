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

| Field   | Type                                                                                                       | Description                               | Required |
| ------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)          | Variable name.                            |   true   |
| userID? | integer                                                                                                    | User ID.                                  |  false   |
| id?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), integer | 1. **specific guild id** <br /> 2. **dm** |  false   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)          | Variable table.                           |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
  name: "getUserVar",
  code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `,
});
```
