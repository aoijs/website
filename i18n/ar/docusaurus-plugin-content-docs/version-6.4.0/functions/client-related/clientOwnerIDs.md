---
title: '$clientOwnerIDs'
description: '$clientOwnerIDs سيعطي اي دي مالك البوت او اي دي مالكين البوت اذا كان البوت في فريق.'
id: clientOwnerIDs
---

$clientOwnerIDs سيعطي اي دي مالك البوت او اي دي مالكين البوت اذا كان البوت في فريق.

## الأستخدام

```php
$clientOwnerIDs[separator?]
```

## الحقول

| الحقل      | النوع  | الوصف                                        | مطلوب |
| ---------- | ------ | -------------------------------------------- |:-----:|
| separator? | string | الفاصل بين الاي دي. (اذا ترك يكون الفاصل: ،) | false |

## مثال

هذا سيعطي اي دي بوتك:

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```
