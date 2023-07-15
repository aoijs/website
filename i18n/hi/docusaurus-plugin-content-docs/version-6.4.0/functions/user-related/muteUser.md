---
title: '$muteUser'
description: '$muteUser will mute or unmute a given user in a Voice Channel.'
id: muteUser
---

`$muteUser` will mute or unmute a given user in a Voice Channel.

## प्रोयोग

```php
$muteUser[guildID;userID;mute?;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                                          |    चाहिए     |
| ------- | -------- | ----------------------------------------------------------------------------------------------------- |:------------:|
| guildID | integer  | The guild ID of where the user is located.                                                            |     true     |
| userID  | integer  | The user ID of the user to mute/unmute.                                                               |     true     |
| mute?   | boolean  | Mute or unmute the user. <br /> 1. **true** (mute / default) <br /> 2. **false** (unmute) | असत्य (नहीं) |
| reason? | स्ट्रिंग | Reason that will be displayed in the guild's audit logs.                                              | असत्य (नहीं) |

## ट्रू (हा)

This will server mute yourself (must be in a voice channel):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```