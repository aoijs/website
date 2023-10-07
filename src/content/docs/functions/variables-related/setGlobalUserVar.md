---
title: $setGlobalUserVar
description: $setGlobalUserVar will change the value of a given global user variable.
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## Usage

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Parameters

| Field   | Type    | Description         | Required |
| ------- | ------- | ------------------- | :------: |
| varname | string  | Variable name.      |   true   |
| value   | string  | New Variable value. |   true   |
| userID? | integer | User ID.            |  false   |
| table?  | string  | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value" for the command author:

```javascript
client.command({
  name: "setGlobalUserVar",
  code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```
