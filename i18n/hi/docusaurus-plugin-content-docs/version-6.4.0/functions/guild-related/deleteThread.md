---
title: '$deleteThread'
description: '$deleteThread will delete a given thread of a channel.'
id: deleteThread
---

`$deleteThread` will delete a given thread of a channel.

## प्रोयोग

```php
$deleteThread[channelID;threadID;reason?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                  |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------- |:------------:|
| channelID | integer  | The ID of the channel where the thread exists in.             |     true     |
| threadID  | integer  | The thread ID.                                                |     true     |
| reason?   | स्ट्रिंग | The reason which will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will delete a thread of the channel where you execute the command in ( make sure to replace threadID with an actual thread ID ):

```javascript
bot.command({
    name: 'deleteThread',
    code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```