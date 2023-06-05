---
title: $onlyNSFW
description: Allows command to be ran in only NSFW marked channel
---

This function only allows the command to be ran in NSFW marked channels

```php
$onlyNSFW[error when ran in non-nsfw channel]
```

```javascript
bot.command({
name: "special",
code: `Special Command
$onlyNSFW[Command only executable in NSFW channels!]`
})
```

![](<../discord-examples/assets/image (38) (1).png>)
