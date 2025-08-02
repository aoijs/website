---
title: $guildEditPost
description: $guildEditPost will edit a post within a guild forum.
id: guildEditPost
---

`$guildEditPost` will edit a post within a guild forum.

## Usage

```aoi
$guildEditPost[threadId;reason?;returnTags?;...threadTags(?)]
```

## Parameters

| Field            | Type                                                                                                | Description                                                               | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | :------: |
| threadId          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the thread or post.                                              |   true   |
| reason?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The reason displayed in the guild's audit logs.                           |  false   |
| returnTags?      | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the thread tags?                                                   |  false   |
| ...threadTags(?) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The applied post tags. Optional when forum channel does not require tags. |    /     |

## Example(s)

This will add a tag named "Tag", which is already present in the forum to the thread or post. 

```javascript
client.command({
    name: "guildEditPost",
    code: `
  $guildEditPost[threadId;This is a reason!;false;+Tag]
  `
});
```

Another example which will add a tag named "Hello" and removed the already existing "Hi" tag from the thread or post.

```javascript
client.command({
    name: "guildEditPost",
    code: `
  $guildEditPost[threadId;This is a reason!;false;+Hello;-Hi]
  `
});
```
