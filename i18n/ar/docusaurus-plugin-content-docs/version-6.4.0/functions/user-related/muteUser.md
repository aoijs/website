---
title: '$muteUser'
description: '$muteUser will mute or unmute a given user in a Voice Channel.'
id: muteUser
---

`$muteUser` will mute or unmute a given user in a Voice Channel.

## الاستخدام

```php
$muteUser[guildID;userID;mute?;reason?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                                                          | مطلوب |
| ------- | ------- | ----------------------------------------------------------------------------------------------------- |:-----:|
| guildID | Integer | The guild ID of where the user is located.                                                            | true  |
| userID  | Integer | The user ID of the user to mute/unmute.                                                               | true  |
| mute?   | boolean | Mute or unmute the user. <br /> 1. **true** (mute / default) <br /> 2. **false** (unmute) | false |
| reason? | string  | Reason that will be displayed in the guild's audit logs.                                              | false |

## مثال

This will server mute yourself (must be in a voice channel):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```