---
title: $pinMessage
description: Pins a message
---

This function allows the bot to pin its own message or the given message

```php
$pinMessage[channelID (optional);messageID (optional)
```

Using the function 

```javascript
bot.command({
name: "pin".
code: `Rules: 
1. Be nice
2. No advertising
$pinMessage`
}) //This pins the bot's message

bot.command({
name: "pin",
code: `$pinMessage[790811472829743105;794203850839949372] I pinned a mesage!`
}) //Pins the given messageID
```

