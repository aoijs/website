---
title: '$getReactions'
description: '$getReactions will return properties about a given reaction on a specific message.'
id: getReactions
---

`$getReactions` will return properties about a given reaction on a specific message.

## الاستخدام

```php
$getReactions[channelID;messageID;reaction;force?;option?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                                                                                                                                            | مطلوب |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | ID of the channel where the message is located in.                                                                                                                                                                      | true  |
| messageID | Integer | ID of the message.                                                                                                                                                                                                      | true  |
| reaction  | string  | The reaction its information will be returned of.                                                                                                                                                                       | true  |
| force?    | boolean | 1. **true** (default) <br /> 2. **false**                                                                                                                                                                         | false |
| option?   | string  | How it will return the users who reacted to that message <br /> 1. **username** (default) - returns the usernames   <br /> 2. **mention** - mentions the users <br /> 3. **id** - returns the user id | false |

**Please note that this won't work without the `GuildMessageReactions` intent.**

## مثال

This will mention all users that reacted to your message, in this case, only your bot:

```javascript
bot.command({
    name: 'getReactions',
    code: `
$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `
});
```