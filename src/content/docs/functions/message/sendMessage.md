---
title: $sendMessage
description: $sendMessage will send a message in the execution channel.
id: sendMessage
---

`$sendMessage` will send a message in the execution channel.

## Usage

```aoi
$sendMessage[content;returnID?]
```

## Parameters

| Field     | Type                                                                                                | Description                                                         | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| content   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Message Content to send.                                            |   true   |
| returnID? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will send a message in the current channel:

```javascript
client.command({
    name: "sendMessage",
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

This will send an embed in the current channel using parsers:

```javascript
client.command({
    name: "sendMessage",
    code: `
   $sendMessage[Hello! {newEmbed:{title:Bonjour!}};false]  
  `
});
```
