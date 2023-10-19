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

| Field      | Type                                                                                                | Description         | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| varname    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Variable name.      |   true   |
| value      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | New Variable value. |   true   |
| channelID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Channel ID.         |  false   |
| table?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
  name: "setChannelVar",
  code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `,
});
```
