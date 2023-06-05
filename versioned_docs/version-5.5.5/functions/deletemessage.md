---
title: $deleteMessage
description: Delete a message with the given Message ID.
---

This function deletes a message with the given message ID from the specified channel ID.

### Usage

```php
$deleteMessage[messageID;channelID]
```

### Parameters 

| FIELD | TYPE | DESCRIPTION |
| -------- | -------- | -------- |
| MessageID | string | The ID of the message we are deleting | 
| ChannelID | integer | The channel we're the message is | 

### Example(s)

```javascript
bot.command({
name: "delete-me",
code: `Deleted the message!
$deleteMessage[$messageID;$channelID]
`
})
```