---
title: '$killClient'
description: '$killClient سيطفأ البوت اجباريا.'
id: killClient
---

$killClient سيطفأ البوت اجباريا.

## الأستخدام

```php
$killClient
```

## مثال

هذا سيطفأ البوت خاص بك اجباريا:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```