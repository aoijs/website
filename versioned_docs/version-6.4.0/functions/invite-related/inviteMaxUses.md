---
title: $inviteMaxUses
description: $inviteMaxUses will return the max uses of a given invite code.
id: inviteMaxUses
---

`$inviteMaxUses` will return the max uses of a given invite code.

## Usage

```php
$inviteMaxUses
```

## Example(s)

This will return the max uses of the created invite:

```javascript
bot.inviteCreateCommand({
    name: 'inviteMaxUses',
    channel: '$channelID',
    code: `
  $inviteMaxUses
  `
});
```
