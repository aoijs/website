---
title: $getGuildForumTags
description: $getGuildForumTags will return the forum's tags.
id: getGuildForumTags
---

`$getGuildForumTags` will return the forum's tags.

## Usage

```php
$getGuildForumTags[forumId;option?;separator?]
```

## Parameters

| Field      | Type    | Description                         | Required |
| ---------- | ------- | ----------------------------------- | :------: |
| forumId    | integer | The ID of the forum channel.        |   true   |
| option?    | string  | The option / format to return.      |  false   |
| separator? | string  | The separator to separate the data. |  false   |

This function also supports **custom formatting**!

## Example(s)

This will return the forum tag names:

```javascript
bot.command({
  name: "getGuildForumTags",
  code: `
  $getGuildForumTags[forumId;name;, ]
  `,
});
```

This will return the emojis of the tags and ids:

```javascript
bot.command({
  name: "getGuildForumTags",
  code: `
  $getGuildForumTags[forumId;Name: {name} -> Emoji: {emoji} {emojiId}]
  `,
});
```
