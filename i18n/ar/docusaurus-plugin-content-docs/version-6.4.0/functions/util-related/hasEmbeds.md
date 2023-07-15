---
title: '$hasEmbeds'
description: '$hasEmbeds will check if there are embeds attached to the message.'
id: hasEmbeds
---

`$hasEmbeds` will check if there are embeds attached to the message.

## الاستخدام

```php
$hasEmbeds[messageID;channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                        | مطلوب |
| --------- | ------- | --------------------------------------------------- |:-----:|
| messageID | Integer | ID of the message to check if it contains an embed. | true  |
| channelID | Integer | ID of the channel where the message is located in.  | true  |

## مثال

This will return `false` as there are no embeds attached to your message:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
