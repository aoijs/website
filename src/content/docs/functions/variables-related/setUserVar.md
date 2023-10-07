---
title: $setUserVar
description: $setUserVar will change the value of a given user variable.
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## Usage

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## Parameters

| Field   | Type    | Description                               | Required |
| ------- | ------- | ----------------------------------------- | :------: |
| varname | string  | Variable name.                            |   true   |
| value   | string  | New Variable value.                       |   true   |
| userID? | integer | User ID.                                  |  false   |
| id?     | string  | 1. **specific guild id** <br /> 2. **dm** |  false   |
| table?  | string  | Variable table.                           |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
  name: "setUserVar",
  code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```
