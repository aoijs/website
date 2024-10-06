---
title: $cloneEmbed
description: $cloneEmbed will clone an embed.
id: cloneEmbed
---

`$cloneEmbed` will clone an embed.

## Usage

```aoi
$cloneEmbed[index;messageID;channelID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                                                              | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | :------: |
| index      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The index of the embed which you want to clone. <br /> 1. **all** <br /> 2. **number**   |   true   |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the embed message that will be cloned.                                         |   true   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the channel that you sent the embed message.                                   |   false  |


## Example(s)

This will clone the previous embed and edit the title after 15 seconds:

```javascript
client.command({
    name: "cloneEmbed",
    code: `
  $title[Bye!]
  $cloneEmbed[all;$get[messageID];$channelID]

  $wait[15s]
  $let[messageID;$sendMessage[{newEmbed: {title:Hello!} {description:I'll edit this message in 15 seconds.}};true]]
  `
});
```
