---
title: $getReactions
description: $getReactions will return properties about a given reaction on a specific message.
id: getReactions
---

`$getReactions` will return properties about a given reaction on a specific message.

## Usage

```php
$getReactions[channelID;messageID;reaction;force?;option?]
```

## Parameters

| Field                                        | Type                                                                                                | Description                                                                                                                                                                                         | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| channelID                                    | integer                                                                                             | ID of the channel where the message is located in.                                                                                                                                                  |   true   |
| messageID                                    | integer                                                                                             | ID of the message.                                                                                                                                                                                  |   true   |
| reaction                                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The reaction its information will be returned of.                                                                                                                                                   |   true   |
| force?                                       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| JavaScript/Reference/Global_Objects/Boolean) | 1. **true** (default) <br /> 2. **false**                                                           | false                                                                                                                                                                                               |
| option?                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | How it will return the users who reacted to that message <br /> 1. **username** (default) - returns the usernames <br /> 2. **mention** - mentions the users <br /> 3. **id** - returns the user id |  false   |

**Please note that this won't work without the `GuildMessageReactions` intent.**

## Example(s)

This will mention all users that reacted to your message, in this case, only your bot:

```javascript
client.command({
  name: "getReactions",
  code: `
$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `,
});
```
