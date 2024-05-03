---
title: $channelID
description: $channelID will return the channel ID of the given channel name.
id: channelID
---

`$channelID` will return the channel ID of the given channel name.

## Usage

```php
$channelID[name?]
```

## Parameters

| Field | Type                                                                                              | Description                                             | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | :------: |
| name? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel name of the channel you want the channel ID of. |  false   |

## Example(s)

This will return the channel ID of the channel where you execute the command in:

```javascript
client.command({
    name: "channelID",
    code: `
  $channelID
  `
});
```
