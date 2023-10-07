---
title: $roleCount
description: $roleCount will return the guild's role count.
id: roleCount
---

`$roleCount` will return the guild's role count.

## Usage

```php
$roleCount[guildID?;fetchFirst?]
```

## Parameters

| Field       | Type    | Description                                                                                        | Required |
| ----------- | ------- | -------------------------------------------------------------------------------------------------- | :------: |
| guildID?    | integer | The ID of the guild.                                                                               |  false   |
| fetchFirst? | boolean | Fetch the roles first before returning the count? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will return the amount of roles of your guild:

```javascript
client.command({
  name: "roleCount",
  code: `
  $roleCount[$guildID;true]
  `
});
```
