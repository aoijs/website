---
title: $reply
---

This function allows you to use Discord's reply feature through your bot

```php
$reply[messageID;message;mention (yes/no)]
```

```javascript
bot.command({
name: "repy",
code: `$reply[797817882339442698;I replied to this message :);yes]`
})
```

