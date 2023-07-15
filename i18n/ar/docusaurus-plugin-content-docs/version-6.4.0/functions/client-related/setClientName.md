---
title: '$setClientName'
description: '$setClientName سيغير اسم البوت.'
id: setClientName
---

$setClientName سيغير اسم البوت.

## الأستخدام

```php
$setClientName[username]
```

## الحقول

| الحقل    | النوع  | الوصف             | مطلوب |
| -------- | ------ | ----------------- |:-----:|
| username | string | اسم البوت الجديد. | true  |

## مثال

This will change the client's username to the command author's username:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```