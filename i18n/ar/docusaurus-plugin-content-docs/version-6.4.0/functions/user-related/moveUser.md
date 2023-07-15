---
title: '$moveUser'
description: '$moveUser will move a given user between two Voice Channels.'
id: moveUser
---

`$moveUser` will move a given user between two Voice Channels.

## الاستخدام

```php
$moveUser[guildID;userID;channelID;reason?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                             | مطلوب |
| --------- | ------- | -------------------------------------------------------- |:-----:|
| guildID   | Integer | The guild ID of where the voice channel is located in.   | true  |
| userID    | Integer | The user ID of the user to move.                         | true  |
| channelID | Integer | The Voice Channel ID of where the user will be moved to. | true  |
| reason?   | string  | Reason that will be displayed in the guild's audit logs. | false |

## مثال

This will move a user to another Voice Channel:

```javascript
bot.command({
    name: 'moveUser',
    code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```