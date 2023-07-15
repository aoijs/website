---
title: '$setClientAvatar'
description: '$setClientAvatar سيغير صورة البوت.'
id: setClientAvatar
---

$setClientAvatar سيغير صورة البوت.

## الأستخدام

```php
$setClientAvatar[URL]
```

## الحقول

| الحقل | النوع  | الوصف                | مطلوب |
| ----- | ------ | -------------------- |:-----:|
| URL   | string | رابط الصورة الجديدة. | true  |

## مثال

هذا سيغير صورة البوت لصورة السخث الذي استخدم الأمر:

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```