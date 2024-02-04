---
title: $guildFeatures
description: $guildFeatures will return unlocked guild features.
id: guildFeatures
---

`$guildFeatures` will return unlocked guild features.

## Usage

```php
$guildFeatures[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the unlocked guild features of a guild:

```javascript
client.command({
  name: "guildFeatures",
  code: `
  $guildFeatures[$guildID;true]
  `
});
```
