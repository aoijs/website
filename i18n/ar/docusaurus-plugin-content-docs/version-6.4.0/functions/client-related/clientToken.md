---
title: '$clientToken'
description: '$clientToken سيعطيك توكن البوت.'
id: clientToken
---

$clientToken سيعطيك توكن البوت.

## الأستخدام

```php
$clientToken
```

> **⚠ عليك ان لا تشارك توكن البوت الخاص بك مع اي شخص ابدا. ⚠ **

## مثال

هذا سيعطيك توكن البوت:

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```