---
title: $slowmode
description: $slowmode will change a channel's slowmode.
id: slowmode
---

`$slowmode` will change a channel's slowmode.

## Usage

```php
$slowmode[time;channelID?]
```

## Parameters

| Field      | Type                                                                                                                                                                                                 | Description                                  | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | :------: |
| time       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The new slowmode of the given channel.       |   true   |
| channelID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer)                                                                                                  | The ID of the channel that will be modified. |  false   |

This has a max time of 21600000 seconds (6 hours).

## Example(s)

This will change the channel's slowmode to three minutes:

```javascript
client.command({
  name: "slowmode",
  code: `
   $slowmode[3m;$channelID]`,
});
```

This will change the channel's slowmode to 6 hours:

```javascript
client.command({
  name: "slowmode",
  code: `
   $slowmode[6h;$channelID]`,
});
```
