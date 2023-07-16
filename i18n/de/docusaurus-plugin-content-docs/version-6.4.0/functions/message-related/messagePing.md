---
title: $messagePing
description: '$messagePing wird die Latenz der Nachricht zurückgeben.'
id: messagePing
---

`$messagePing` gibt die Latenz der Nachricht zurück.

## Verwendung

```php
$messagePing
```

## Beispiel(e)

Dies gibt die Latenz Ihrer Nachricht zurück:

```javascript
bot.command({
    name: 'messagePing',
    code: `
  $messagePing
  `
});
```
