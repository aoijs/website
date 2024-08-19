---
title: $isInteractionRepliable
description: $isInteractionRepliable will return true or false depending on whether the interaction replies to or not.
id: isInteractionRepliable
---

`$isInteractionRepliable` will return `true` or `false` depending on whether the interaction is able to reply or not.

## Usage

```aoi
$isInteractionRepliable
```

## Example(s)
This will return `true` because the interaction is able reply.

```js
client.command({
    name: "isInteractionRepliable",
    prototype: "slash",
    type: "interaction",
    code: `
$isInteractionRepliable
$interactionReply[I just replied!]
`
});
```
