---
title: $inviteGuildID
description: $inviteGuildID will return the invite guild ID of a given invite code.
id: inviteGuildID
---

`$inviteGuildID` will return the invite guild ID of a given invite code.

## Usage

```php
$inviteGuildID
```

## Example(s)

This will return the invite guild ID of the created invite:

```javascript
bot.inviteCreateCommand({
    name: 'inviteGuildID',
    channel: '$channelID',
    code: `
  $inviteGuildID
  `
});
```
