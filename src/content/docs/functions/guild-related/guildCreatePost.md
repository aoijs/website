---
title: $guildCreatePost
description: $guildCreatePost will create a post within a guild forum.
id: guildCreatePost
---

`$guildCreatePost` will create a post within a guild forum.

## Usage

```php
$guildCreatePost[forumId;name;content;autoArchiveDuration?;returnId?;reason?;...appliedTags(?)]
```

## Parameters

| Field                                                                                                          | Type    | Description                                                                                                                                                                     | Required |
| -------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| forumId                                                                                                        | integer | The ID of the forum channel.                                                                                                                                                    |   true   |
| name                                                                                                           | string  | The name of the forum post.                                                                                                                                                     |   true   |
| content                                                                                                        | string  | The content of the start message.                                                                                                                                               |   true   |
| [autoArchiveDuration](https://discord-api-types.dev/api/discord-api-types-v10/enum/ThreadAutoArchiveDuration)? | number  | The automatic archive duration of the forum post. <br /> - **1440** (one day) <br /> - **60** (one hour) <br /> - **10080** (one week / default) <br /> - **4320** (three days) |  false   |
| returnId?                                                                                                      | boolean | Return the Id of the newly created forum post?                                                                                                                                  |  false   |
| reason?                                                                                                        | string  | The reason displayed in the guild's audit logs.                                                                                                                                 |  false   |
| ...appliedTags(?)                                                                                              | string  | The applied post tags. Optional when forum channel does not require tags.                                                                                                       |    /     |

## Example(s)

This will create a post in the given forum with the name "this is a post" with an embed and a button attached to the message:

```javascript
bot.command({
  name: "guildCreatePost",
  code: `
  $guildCreatePost[forumId;This is a Post!;Hello!  {newEmbed:{title:This is an embed!}} {actionRow:{button:Button:primary:customId:false}};10080;true]
  `,
});
```
