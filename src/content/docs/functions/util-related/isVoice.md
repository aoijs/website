---
title: $isVoice
description: $isVoice will check if the given channel is a voice channel or not.
id: isVoice
---

`$isVoice` will check if the given channel is a voice channel or not.

## Usage

```php
$isVoice[channelID]
```

## Parameters

| Field     | Type                                                                                                | Description                                                       | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | :------: |
| channelID | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the channel that you want to check if it's a Voice Channel. |   true   |

## Example(s)

This will return either `true` or `false` depending on what you use as argument:

```javascript
client.command({
  name: "isVoice",
  code: `
  $isVoice[$channelID]
  `,
});
```
