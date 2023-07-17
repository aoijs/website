---
title: $commandsCount
description: '$commandsCount wird die Anzahl der Befehle zurückgeben.'
id: commandsCount
---

`$commandsCount` gibt die Anzahl der Befehle zurück.

## Verwendung

```php
$commandsCount
```

## Beispiel(e)

Dies gibt den Betrag deiner Befehle zurück:

```javascript
bot.command({
    name: 'commandsCount',
    code: `
  $commandsCount
  `
});
```