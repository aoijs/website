---
title: '$shutdown'
description: '$shutdown will shutdown / end the process of your bot.'
id: shutdown
---

`$shutdown` will shutdown / end the process of your bot.

## الاستخدام

```php
$shutdown
```

## مثال

This will shutdown your bot:

```javascript
bot.command({
    name: "shutdown",
    code: `
    $shutdown
    `
});
```