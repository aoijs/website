---
title: $setClientBanner
description: $setClientBanner will set the banner of the client.
id: setClientBanner
---

`$setClientBanner` will set the banner of the client.

## Usage

```aoi
$setClientBanner[url]
```

:::danger[Limitation]

The ratelimit for this endpoint is set to **two requests** per **5 minutes**. Similar to the avatar and username endpoint.

:::

## Parameters

| Field | Type                                                                                              | Description                              | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| url   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The URL of the banner (supports base64). |   true   |

## Example(s)

This will attempt to set the avatar of the client to your user banner:

```javascript
client.command({
    name: "setClientBanner",
    code: `
  $setClientBanner[$authorBanner]
  `
});
```
