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

| Field            | Type                                                                                                | Description                                                               | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | :------: |
| forumId          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the forum channel.                                              |   true   |
| reason?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The reason displayed in the guild's audit logs.                           |  false   |
| returnTags?      | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the thread tags?                                                   |  false   |
| ...threadTags(?) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The applied post tags. Optional when forum channel does not require tags. |    /     |

## Example(s)

This will create a post in the given forum with the name "this is a post" with an embed and a button attached to the message:

```javascript
client.command({
  name: "guildEditPost",
  code: `
  $guildEditPost[forumId;This is a reason!;false;Tag 1;Tag 2;Tag 3]
  `
});
```
