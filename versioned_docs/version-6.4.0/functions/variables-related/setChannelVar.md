---
title: $setChannelVar
description: $setChannelVar will change the value of a given channel variable.
id: setChannelVar
---

`$setChannelVar` will change the value of a given channel variable.

## Usage

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Parameters

| Field      | Type    | Description         | Required |
| ---------- | ------- | ------------------- | :------: |
| varname    | string  | Variable name.      |  true    |
| value      | string  | New Variable value. |  true    |
| channelID? | integer | Channel ID.         |  false   |
| table?     | string  | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```