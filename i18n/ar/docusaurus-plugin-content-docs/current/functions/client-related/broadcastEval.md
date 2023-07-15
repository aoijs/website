---
title: '$broadcastEval'
description: '$broadcastEval سيشغل كود في جميع السيرفرات في كل الشاردز الخاصة بالبوت.'
id: broadcastEval
---

$broadcastEval سيشغل كود في جميع السيرفرات وفي جميع الشاردات الخاصة بالبوت. (يتطلب استعمال نظام الشاردينج)

## الأستخدام

```php
$broadcastEval[function]
```

## الحقول

| الحقل    | النوع  | الوصف                   | مطلوب |
| -------- | ------ | ----------------------- |:-----:|
| function | string | الكود الذي تريد تشغيله. | true  |

## مثال

**يتطلب نظام الشاردينج - زر دليل الشاردينج إن كنت تحتاج لشرح**

هذا سيعطيك عدد السيرفر التي بوتك موجود فيها:

```javascript
bot.command({
    name: 'broadcastEval',
    code: `
  $broadcastEval[$guildCount]
  `
});
```
