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

```aoi
client.command({
    name: "isInteractionReplied",
    prototype: "slash",
    type: "interaction",
    code: `
$isInteractionReplied 
$interactionReply[I just replied!]
});
```
