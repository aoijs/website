---
title: '$reboot'
description: '$reboot wird Ihren Bot neu starten.'
id: reboot
---

`$reboot` wird Ihren Bot neu starten.

## Verwendung

```php
$reboot
```

## Beispiel(e)

Dies wird deinen Bot neu starten:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```