---
title: '$messageID'
description: '$messageID will return the message ID.'
id: messageID
---

`$messageID` will return the message ID.

## प्रोयोग

```php
$messageID
```

## उदाहरण

This will return the message ID of the message with which you executed the command:

```javascript
bot.command({
    name: 'messageID',
    code: `
  The message ID of your the message you just sent is: "$messageID"
  `
});
```
