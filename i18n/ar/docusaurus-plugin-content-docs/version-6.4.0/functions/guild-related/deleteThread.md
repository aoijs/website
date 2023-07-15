---
title: '$deleteThread'
description: '$deleteThread will delete a given thread of a channel.'
id: deleteThread
---

`$deleteThread` will delete a given thread of a channel.

## الاستخدام

```php
$deleteThread[channelID;threadID;reason?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                  | مطلوب |
| --------- | ------- | ------------------------------------------------------------- |:-----:|
| channelID | Integer | The ID of the channel where the thread exists in.             | true  |
| threadID  | Integer | The thread ID.                                                | true  |
| reason?   | string  | The reason which will be displayed in the guild's audit logs. | false |

## مثال

This will delete a thread of the channel where you execute the command in ( make sure to replace threadID with an actual thread ID ):

```javascript
bot.command({
    name: 'deleteThread',
    code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```