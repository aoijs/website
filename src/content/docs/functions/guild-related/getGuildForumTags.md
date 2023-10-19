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

| Field      | Type                                                                                                | Description                         | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| forumId    | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the forum channel.        |   true   |
| option?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The option / format to return.      |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The separator to separate the data. |  false   |

This function also supports **custom formatting**!

## Example(s)

This will return the forum tag names:

```javascript
client.command({
  name: "getGuildForumTags",
  code: `
  $getGuildForumTags[forumId;name;, ]
  `,
});
```

This will return the emojis of the tags and ids:

```javascript
client.command({
  name: "getGuildForumTags",
  code: `
  $getGuildForumTags[forumId;Name: {name} -> Emoji: {emoji} {emojiId}]
  `,
});
```
