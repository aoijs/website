---
title: $onlyForChannels
description: Allows the command to be only executable in the given channel
---

This function only allows the command to be ran in the specified channels

```php
$onlyForChannels[channelID;channelID;...;error when not in given channels]
```

```javascript
bot.command({
name: "special",
code: `Special Command
$onlyForChannels[773353953269252127;:x: Command not executable here]`
})
```

