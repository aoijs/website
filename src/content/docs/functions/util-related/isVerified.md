---
title: $isVerified
description: $isVerified checks if the given guild is verified by Discord.
id: isVerified
---

`$isVerified` checks if the given guild is verified by Discord.

## Usage

```php
$isVerified[guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                                             | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild where you want to check its verification status of. |  false   |

## Example(s)

This will check if your server is verified and return either `true` or `false`:

```javascript
client.command({
  name: "isVerified",
  code: `
  $isVerified[$guildID]
  `,
});
```
