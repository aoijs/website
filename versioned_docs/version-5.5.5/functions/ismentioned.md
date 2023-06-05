---
title: $isMentioned
description: Checks if role/channel/user/@everyone was mentioned (Boolean)
---
## Usage
```php
$isMentioned[userID/roleID/channelID/everyone]
```

```javascript
bot.command({
name: "was-mentioned",
code: `$isMentioned[535566311942651924]`
})
```