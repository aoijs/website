---
title: $isInteractionDeferred
description: $isInteractionDeferred will return true or false depending on whether the interaction has been deferred to or not.
id: isInteractionDeferred
---

`isInteractionDeferred` will return `true` or `false` depending on whether the interaction has been deferred to or not.

## Usage

```aoi
$isInteractionDeferred
```

## Example(s)
This will return `true` because the interaction has been deferred.

```js
client.interactionCommand({
    name: "isInteractionDeferred",
    prototype: "slash",
    code: `
$isInteractionDeferred
$interactionFollowUp[Hello World!]
$interactionDefer[false]
`
});
```
