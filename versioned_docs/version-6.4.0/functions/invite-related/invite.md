---
title: $invite
description: $invite will return information about a given invite code.
id: invite
---

`$invite` will return information about a given invite code.

## Usage

```php
$invite
```

## Example(s)

This will return information about an invite of a given guild:

```javascript
bot.inviteCreateCommand({
    name: 'invite',
    channel: '$channelID',
    code: `
  $invite
  `
});
```
