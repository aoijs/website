---
title: $interactionReply
description: $interactionReply allows you to send an interaction message reply.
id: interactionReply
---

`$interactionReply` allows you to send an interaction message reply.

## Usage

```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?;returnID?]
```

## Parameters

| Field            | Type                                                                                                | Description                                                                          | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| content?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Message content.                                                                     |  false   |
| embeds?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Embed parser.                                                                        |  false   |
| components?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Component parser.                                                                    |  false   |
| files?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | File Parser.                                                                         |  false   |
| allowedMentions? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users**     |  false   |
| ephemeral?       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| returnID?       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the interaction response message ID(true) or not(false - **default**) |  false   |

## Example(s)

```javascript
client.interactionCommand({
  name: "interactionReply",
  prototype: "slash", // button/selectMenu/slash
  code: `
  $interactionReply[Hello, world!;;;;everyone;false]
  `
});
```
