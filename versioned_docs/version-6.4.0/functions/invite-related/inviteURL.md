---
title: $inviteURL
description: $inviteURL will return the invite URL of a given invite code.
id: inviteURL
---

`$inviteURL` will return the invite URL of a given invite code.

## Usage

```php
$inviteURL
```

## Example(s)

This will return the invite guild ID of the created invite:

```javascript
bot.inviteCreateCommand({
    name: 'inviteURL',
    channel: '$channelID',
    code: `
  $inviteURL
  `
});
```
