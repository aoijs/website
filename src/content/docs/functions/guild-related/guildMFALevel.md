---
title: $guildMFALevel
description: $guildMFALevel will return the guild's MFA Level.
id: guildMFALevel
---

`$guildMFALevel` will return the guild's MFA Level.

## Usage

```php
$guildMFALevel[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

| Type |                                                               |
| ---- | ------------------------------------------------------------- |
| 0    | Guild has MFA/2FA requirement for moderation actions disabled |
| 1    | Guild has MFA/2FA requirement for moderation actions          |

## Example(s)

This will return the guild's MFA Level:

```javascript
bot.command({
  name: "guildMFALevel",
  code: `
  $guildMFALevel[$guildID]
  `,
});
```
