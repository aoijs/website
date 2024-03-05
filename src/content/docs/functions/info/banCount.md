---
title: $banCount
description: $banCount will return the amount of banned users of a specific guild.
id: banCount
---

`$banCount` will return the amount of banned users of a specific guild.

## Usage

```php
$banCount[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                 | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------- |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID of the guild you want to retrieve the amount of banned users from. | false    |

#### Please note that your bot requires permissions to `VIEW_AUDIT_LOG`

## Example(s)

This will return the amount of banned users in your guild:

```javascript
client.command({
  name: "banCount",
  code: `
  $banCount
  `
});
```
