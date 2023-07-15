---
title: $inviteChannelID
description: $inviteChannelID will return the invite channel ID of a given invite code.
id: inviteChannelID
---

`$inviteChannelID` will return the invite channel ID of a given invite code.

## Usage

```php
$inviteChannelID
```

## Example(s)

This will return the invite Channel ID of the created invite:

```javascript
bot.inviteCreateCommand({
    name: 'inviteChannelID',
    channel: '$channelID',
    code: `
  $inviteChannelID
  `
});
```
