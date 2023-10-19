---
title: $isStreaming
description: $isStreaming will check if one user is streaming in a voice channel.
id: isStreaming
---

`$isStreaming` will check if one user is streaming in a voice channel.

## Usage

```php
$isStreaming[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                            | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the user you want to check if they're streaming. |  false   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the channel where they're streaming in.          |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're streaming (voice channel) or not:

```javascript
client.command({
  name: "isStreaming",
  code: `
  $isStreaming[$authorID;$guildID]
  `,
});
```
