---
title: $isInteractionDeferred
description: $isInteractionDeferred will return true or false depending on whether the interaction has been deferred to or not.
id: isInteractionDeferred
---

`$isInteractionRepliable` will return `true` or `false` depending on whether the interaction has been deferred to or not.

## Usage

```aoi
$isInteractionDeferred
```

## Example(s)
This will return `true` because the interaction has been deferred.

```js
client.command({
    name: "isInteractionDeferred",
    prototype: "slash",
    type: "interaction",
    code: `
$isInteractionDeferred
$interactionFollowUp[Hello World!]
$interactionDefer[false]
`
});
```
