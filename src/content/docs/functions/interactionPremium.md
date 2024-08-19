---
title: $interactionPremium
description: $interactionPremium restricts command to premium-only subscribers using Discord SKUs.
id: interactionPremium
---

`$interactionPremium` restricts command to premium-only subscribers using [Discord SKUs](https://discord.com/developers/docs/monetization/skus).

## Usage

```aoi
$interactionPremium
```

## Example(s)

```js
client.interactionCommand({
    name: "interactionPremium",
    prototype: "slash",
    code: `
$interactionReply[If you see this message, you are subscribed to Premium!]

$interactionPremium
`
});
```
