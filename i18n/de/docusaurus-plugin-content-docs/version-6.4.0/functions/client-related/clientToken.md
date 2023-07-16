---
title: $clientToken
description: '$clientToken wird den Token des Clients zurückgeben.'
id: clientToken
---

`$clientToken` wird den Token des Clients zurückgeben.

## Verwendung

```php
$clientToken
```

> ** :Warnung: Du solltest niemals dein Discord Bot Token mit irgendjemandem teilen.**

## Beispiel(e)

Dies wird das Klienten-Token zurückgeben:

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```