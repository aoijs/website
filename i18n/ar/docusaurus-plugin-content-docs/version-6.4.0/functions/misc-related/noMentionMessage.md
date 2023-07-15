---
title: '$noMentionMessage'
description: '$noMentionMessage will return the part of the message which contains no mention.'
id: noMentionMessage
---

`$noMentionMessage` will return the part of the message which contains no mention.

## الاستخدام

```php
$noMentionMessage[args]
```

## البارامترات

| Field | النوع  | الديسكبربشين      | مطلوب |
| ----- | ------ | ----------------- |:-----:|
| args? | string | Message position. | false |

## مثال

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```