---
title: $webhookExists
description: $webhookExists will check if a given webhook exists.
id: webhookExists
---

`$webhookExists` will check if a given webhook exists.

## Usage

```aoi
$webhookExists[id;token]
```

## Parameters

| Field | Type                                                                                              | Description    | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------- | :------: |
| id    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Webhook ID.    |   true   |
| token | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Webhook token. |   true   |

## Example(s)

This will check if the given webhook exists:

```javascript
client.command({
    name: "webhookExists",
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ];, ]
  `
});
```
