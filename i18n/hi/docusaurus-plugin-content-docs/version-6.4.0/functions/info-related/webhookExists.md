---
title: '$webhookExists'
description: '$webhookExists will check if a given webhook exists.'
id: webhookExists
---

`$webhookExists` will check if a given webhook exists.

## प्रोयोग

```php
$webhookExists[id;token]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन   | चाहिए |
| ----- | -------- | -------------- |:-----:|
| id    | integer  | Webhook ID.    | true  |
| token | स्ट्रिंग | Webhook token. | true  |

## ट्रू (हा)

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
