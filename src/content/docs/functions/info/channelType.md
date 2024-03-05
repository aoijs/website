---
title: $channelType
description: $channelType will return the given channel's type.
id: channelType
---

`$channelType` will return the given channel's type.

## Usage

```php
$channelType[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                 | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel you want the channel type to be returned. |  false   |

## Example(s)

This will return the channel type of the channel where you execute the command in:

```javascript
client.command({
  name: "channelType",
  code: `
  $channelType[$channelID]
  `
});
```
