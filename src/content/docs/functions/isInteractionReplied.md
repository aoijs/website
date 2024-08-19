---
title: $isInteractionReplied
description: $isInteractionReplied will return true or false depending on whether the interaction has been replied to or not.
id: isInteractionReplied
---

`$isInteractionReplied` will return `true` or `false` depending on whether the interaction has been replied to or not.

## Usage

```aoi
$isInteractionReplied
```

## Example(s)
This will return `true` because the interaction has been replied to previously.

```js
client.interactionCommand({
    name: "isInteractionReplied",
    prototype: "slash",
    code: `
$isInteractionReplied 
$interactionReply[I just replied!]
`
});
```
