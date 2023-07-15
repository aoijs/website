---
title: '$hasEmbeds'
description: '$hasEmbeds will check if there are embeds attached to the message.'
id: hasEmbeds
---

`$hasEmbeds` will check if there are embeds attached to the message.

## प्रोयोग

```php
$hasEmbeds[messageID;channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                        | चाहिए |
| --------- | ------- | --------------------------------------------------- |:-----:|
| messageID | integer | ID of the message to check if it contains an embed. | true  |
| channelID | integer | ID of the channel where the message is located in.  | true  |

## ट्रू (हा)

This will return `false` as there are no embeds attached to your message:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
