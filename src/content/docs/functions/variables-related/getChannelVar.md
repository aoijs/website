---
title: $getChannelVar
description: $getChannelVar will return the value of a given channel variable.
id: getChannelVar
---

`$getChannelVar` will return the value of a given channel variable.

## Usage

```php
$getChannelVar[varname;channelID?;table?]
```

## Parameters

| Field      | Type    | Description     | Required |
| ---------- | ------- | --------------- | :------: |
| varname    | string  | Variable name.  |   true   |
| channelID? | integer | Channel ID.     |  false   |
| table?     | string  | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
  name: "getChannelVar",
  code: `
    $getChannelVar[Example;$channelID;main]
    `,
});
```
