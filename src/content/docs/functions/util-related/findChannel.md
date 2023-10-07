---
title: $findChannel
description: $findChannel will search a given channel by its name.
id: findChannel
---

`$findChannel` will search a given channel by its name.

## Usage

```php
$findChannel[channelResolver;returnSelf?]
```

## Parameters

| Field           | Type    | Description                                                                                             | Required |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------- | :------: |
| channelResolver | string  | Name of the channel you want to search for.                                                             |   true   |
| returnSelf?     | boolean | Will return the channel where the command is executed in by default if the given channel was not found. |  false   |

## Example(s)

This will return `882360051640193054` as it was able to find the `#⊂・⊃﹐aoi_v5` channel:

```javascript
client.command({
  name: "findChannel",
  code: `
  $findChannel[⊂・⊃﹐aoi_v5;false]
  `
});
```
