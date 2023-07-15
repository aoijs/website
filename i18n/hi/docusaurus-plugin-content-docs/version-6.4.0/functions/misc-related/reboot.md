---
title: '$reboot'
description: '$reboot will restart your bot.'
id: reboot
---

`$reboot` will restart your bot.

## प्रोयोग

```php
$reboot
```

## उदाहरण

This will restart your bot:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```