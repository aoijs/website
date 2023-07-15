---
title: $inviteCode
description: $inviteCode will return the invite channel ID of a given invite code.
id: inviteCode
---

`$inviteCode` will return the invite channel ID of a given invite code.

## Usage

```php
$inviteCode
```

## Example(s)

This will return the invite Channel ID of the created invite:

```javascript
bot.inviteCreateCommand({
    name: 'inviteCode',
    channel: '$channelID',
    code: `
  $inviteCode
  `
});
```
