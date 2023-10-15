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

| Field      | Type                                                                                              | Description     | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| channelID? | integer                                                                                           | Channel ID.     |  false   |
| table?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

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
