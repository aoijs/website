---
title: $webhookExists
description: $webhookExists will check if a given webhook exists.
id: webhookExists
---

`$webhookExists` will check if a given webhook exists.

## Usage

```php
$webhookExists[id;token]
```

## Parameters

| Field | Type    | Description    | Required |
| ----- | ------- | -------------- | :------: |
| id    | integer | Webhook ID.    |   true   |
| token | string  | Webhook token. |   true   |

## Example(s)

This will check if the given Webhook Exists:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ];, ]
  `
});
```
