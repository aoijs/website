---
title: $unPinMessage
description: Unpins a message
---

This function allows the bot to unpin the given messageID \(if pinned\)

```php
$unPinMessage[channelID;messageID]
```

Using the function

```javascript
bot.command({
name: "unpin",
code: `$unPinMessage[790811472829743105;794203850839949372]`
}) //Unpins the given messageID
```

