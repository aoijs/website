---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds سيعطي السيرفرات المشتركة بين مستخدم والبوت.'
id: clientMutualGuilds
---

$clientMutualGuilds سيعطي السيرفرات المشتركة بين مستخدم والبوت.

## الأستخدام

```php
$clientMutualGuilds[userID?;sep?]
```

## الحقول

| الحقل   | النوع   | الوصف                 | مطلوب |
| ------- | ------- | --------------------- |:-----:|
| userID? | Integer | اي دي المستخدم.       | false |
| sep?    | string  | الفاصل بين السيرفرات. | false |

## مثال

هذا سيعطيك السيرفرات المشتركة بينك وبين البوت:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
