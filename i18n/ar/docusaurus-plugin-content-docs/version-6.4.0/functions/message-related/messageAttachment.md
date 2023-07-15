---
title: '$messageAttachment'
description: '$messageAttachment will return a message attachment depending on the given index.'
id: messageAttachment
---

`$messageAttachment` will return a message attachment depending on the given index.

## الاستخدام

```php
$messageAttachment[index?]
```

## البارامترات

| Field  | النوع   | الديسكبربشين                                            | مطلوب |
| ------ | ------- | ------------------------------------------------------- |:-----:|
| index? | Integer | The index of which message attachment will be returned. | false |

## مثال

This will return your given attachment:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
  You had the following attachment in your message: $messageAttachment
  `
});
```
