---
title: $guildEditPost
description: $guildEditPost will edit a post within a guild forum.
id: guildEditPost
---

`$guildEditPost` will edit a post within a guild forum.

## Usage

```php
$guildEditPost[forumId;userID?;...threadTags(?)]
```

## Parameters

| Field            | Type    | Description                                                               | Required |
| ---------------- | ------- | ------------------------------------------------------------------------- | :------: |
| forumId          | integer | The ID of the forum channel.                                              |   true   |
| reason?          | string  | The reason displayed in the guild's audit logs.                           |  false   |
| returnTags?      | boolean | Return the thread tags?                                                   |  false   |
| ...threadTags(?) | string  | The applied post tags. Optional when forum channel does not require tags. |    /     |

## Example(s)

This will create a post in the given forum with the name "this is a post" with an embed and a button attached to the message:

```javascript
client.command({
  name: "guildEditPost",
  code: `
  $guildEditPost[forumId;This is a reason!;false;Tag 1;Tag 2;Tag 3]
  `,
});
```
