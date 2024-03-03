---
title: $modifyWebhook
description: $modifyWebhook will modify a given webhook.
id: modifyWebhook
---

`$modifyWebhook` will modify a given webhook.

## Usage

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Parameters

| Field      | Type                                                                                              | Description                                              | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| webhookID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The webhook ID to modify.                                |   true   |
| name       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New webhook name.                                        |   true   |
| avatar     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New webhook avatar.                                      |   true   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel where the webhook is located in.       |  false   |
| reason?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reason that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will modify a existing webhook and change it's avatar to your user avatar:

```javascript
client.command({
  name: "modifyWebhook",
  code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```
