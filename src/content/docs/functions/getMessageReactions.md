---
title: $getMessageReactions
description: $getMessageReactions returns a list of reactions from a specified message in a channel.
id: getMessageReactions
---

`$getMessageReactions` returns a list of reactions (emojis) on a specified message from a specific channel.

## Usage

```aoi  
$getMessageReactions[channelID?;messageID;type?;sep?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                                   | Required |
|------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|:--------:|
| channelID? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the channel where the message is located. Defaults to the current channel if not provided.          |  false   |
| messageID  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the message to get reactions from.                                                                  |  true    |
| type?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The type of data to return: <br /> 1. **emoji** (default) – emoji format <br /> 2. **name** <br /> 3. **id**  |  false   |
| sep?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values. Default is `, `.                                              |  false   |

## Example(s)

This command returns the list of emoji reactions (formatted) on a specific message:

```javascript
client.command({
    name: "getMessageReactions",
    code: `
  $getMessageReactions[$channelID;112233445566778899;emoji;, ] $comment[Example message ID provided.]
  `
});
```

This command returns only the names of the emoji reactions:

```javascript
client.command({
    name: "getMessageReactions",
    code: `
  $getMessageReactions[$channelID;112233445566778899;name] $comment[Example message ID provided.]
  `
});
```