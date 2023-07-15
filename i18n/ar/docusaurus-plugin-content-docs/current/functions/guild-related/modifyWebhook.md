---
title: '$modifyWebhook'
description: '$modifyWebhook will modify a given webhook.'
id: modifyWebhook
---

`$modifyWebhook` will modify a given webhook.

## الاستخدام

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                             | مطلوب |
| ---------- | ------- | -------------------------------------------------------- |:-----:|
| webhookID  | Integer | The webhook ID to modify.                                | true  |
| name       | string  | New webhook name.                                        | true  |
| avatar     | string  | New webhook avatar.                                      | true  |
| channelID? | Integer | ID of the channel where the webhook is located in.       | false |
| reason?    | string  | Reason that will be displayed in the guild's audit logs. | false |

## مثال

This will modify a existing webhook and change it's avatar to your user avatar:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```