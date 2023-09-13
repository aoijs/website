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

| Field     | Type    | Description                                                                                        | Required |
| --------- | ------- | -------------------------------------------------------------------------------------------------- | :------: |
| channelID | integer | Channel ID of where the webhook will be created in.                                                |   true   |
| name      | string  | The webhook's display name.                                                                        |   true   |
| avatar    | string  | The webhook avatar url.                                                                            |   true   |
| reason    | string  | Reason which will be displayed in the guild's audit logs.                                          |   true   |
| sep?      | string  | The separator which will be used to separate important credentials like token and ID, default `,`. |  false   |

## Example(s)

This will create a webhook in the current channel:

```javascript
bot.command({
  name: "createWebhook",
  code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `,
});
```
