---
title: $hasGuildTemplate
description: $hasGuildTemplate will check if the given guild has a guild template created.
id: hasGuildTemplate
---

`$hasGuildTemplate` will check if the given guild has a guild template created.

## Usage

```aoi
$hasGuildTemplate[guildId?]
```

## Parameters

| Field    | Type                                                                                              | Description                | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------- | :------: |
| guildId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild Id to check for. |  false   |

## Example(s)

This will check if the given guild has a guild template created.

```javascript
client.command({
    name: "hasGuildTemplate",
    code: `
  $hasGuildTemplate[$guildId]
  `
});
```
