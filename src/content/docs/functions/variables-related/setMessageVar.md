---
title: $setMessageVar
description: $setMessageVar will change the value of a given message variable.
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## Usage

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Parameters

| Field      | Type    | Description         | Required |
| ---------- | ------- | ------------------- | :------: |
| varname    | string  | Variable name.      |   true   |
| value      | string  | New Variable value. |   true   |
| messageID? | integer | Message ID.         |  false   |
| table?     | string  | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
  name: "setMessageVar",
  code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```
