---
title: '$modifyWebhook'
description: '$modifyWebhook will modify a given webhook.'
id: modifyWebhook
---

`$modifyWebhook` will modify a given webhook.

## प्रोयोग

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                             |    चाहिए     |
| ---------- | -------- | -------------------------------------------------------- |:------------:|
| webhookID  | integer  | The webhook ID to modify.                                |     true     |
| name       | स्ट्रिंग | New webhook name.                                        |     true     |
| avatar     | स्ट्रिंग | New webhook avatar.                                      |     true     |
| channelID? | integer  | ID of the channel where the webhook is located in.       | असत्य (नहीं) |
| reason?    | स्ट्रिंग | Reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will modify a existing webhook and change it's avatar to your user avatar:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```