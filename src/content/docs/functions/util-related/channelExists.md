---
title: $channelExists
description: $channelExists will check if the given channel exists.
id: channelExists
---

`$channelExists` will check if the given channel exists.

## Usage

```php
$channelExists[channel]
```

## Parameters

| Field   | Type                                                                                                       | Description                 | Required |
| ------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- | :------: |
| channel | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), integer | Channel ID or channel name. |   true   |

## Example(s)

This will check if a channel with the name `general` exists, alternatively you could use the channel ID instead:

```javascript
client.command({
  name: "channelExists",
  code: `
  $channelExists[general]
  `,
});
```
