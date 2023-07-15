---
title: '$randomEmoji'
description: '$randomEmoji will return a random emoji ID.'
id: randomEmoji
---

`$randomEmoji` will return a random emoji ID.

## الاستخدام

```php
$randomEmoji
```

## مثال

This will return a random emoji ID of your guild:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```
