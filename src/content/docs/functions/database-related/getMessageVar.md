---
title: $getMessageVar
description: $getMessageVar will return the value of a given message variable.
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## Usage

```php
$getMessageVar[varname;guildID?;table?]
```

## Parameters

| Field      | Type                                                                                              | Description     | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| messageID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | message ID      |  false   |
| table?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
  name: "getMessageVar",
  code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```
