---
title: '$createWebhook'
description: '$createWebhook will create a webhook.'
id: createWebhook
---

`$createWebhook` will create a webhook.

## प्रोयोग

```php
$createWebhook[channelID;name;avatar;reason;sep?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                       |    चाहिए     |
| --------- | -------- | -------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer  | Channel ID of where the webhook will be created in.                                                |     true     |
| name      | स्ट्रिंग | The webhook's display name.                                                                        |     true     |
| avatar    | स्ट्रिंग | The webhook avatar url.                                                                            |     true     |
| reason    | स्ट्रिंग | Reason which will be displayed in the guild's audit logs.                                          |     true     |
| sep?      | स्ट्रिंग | The separator which will be used to separate important credentials like token and ID, default `,`. | असत्य (नहीं) |

## ट्रू (हा)

This will create a webhook in the current channel:

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `
});
```
