---
title: $getGuildAutomodNames
description: $getGuildAutomodNames will return the guild's automod rules.
id: getGuildAutomodNames
---

`$getGuildAutomodNames` will return the guild's automod rules.

## Usage

```php
$getGuildAutomodNames[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the automod rules of the current guild (if any):

```javascript
client.command({
    name: "getGuildAutomodNames",
    code: `
  $getGuildAutomodNames[$guildID]
  `
});
```
