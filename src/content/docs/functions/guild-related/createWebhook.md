---
title: $createWebhook
description: $createWebhook will create a webhook.
id: createWebhook
---

`$createWebhook` will create a webhook.

## Usage

```php
$createWebhook[channelID;name;avatar;reason;sep?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                                        | Required |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of where the webhook will be created in.                                                |   true   |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The webhook's display name.                                                                        |   true   |
| avatar    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The webhook avatar url.                                                                            |   true   |
| reason    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reason which will be displayed in the guild's audit logs.                                          |   true   |
| sep?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator which will be used to separate important credentials like token and ID, default ``. |  false   |

## Example(s)

This will create a webhook in the current channel:

```javascript
client.command({
  name: "createWebhook",
  code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `
});
```
