---
title: $guildDescription
description: $guildDescription will return the guild's description.
id: guildDescription
---

`$guildDescription` will return the guild's description.

## Usage

```php
$guildDescription[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the description of a specific guild:

```javascript
client.command({
  name: "guildDescription",
  code: `
  $guildDescription[$guildID]
  `
});
```
