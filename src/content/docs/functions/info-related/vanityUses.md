---
title: $vanityUses
description: $vanityUses will return the uses of a vanity URL.
id: vanityUses
---

`$vanityUses` will return the uses of a vanity URL.

## Usage

```php
$vanityUses[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the uses of your guild's vanity URL, if you have one:

```javascript
client.command({
  name: "vanityUses",
  code: `
  $vanityUses[$guildID]
  `
});
```
