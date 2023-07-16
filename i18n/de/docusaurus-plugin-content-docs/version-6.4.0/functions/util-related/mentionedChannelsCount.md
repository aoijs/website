---
title: $mentionedChannelsCount
description: '$mentionedChannelsCount gibt die Anzahl der erwähnten Kanäle innerhalb einer Nachricht zurück.'
id: mentionedChannelsCount
---

`$mentionedChannelsCount` gibt die Anzahl der in einer Nachricht angegebenen Kanalangaben zurück.

## Verwendung

```php
$mentionedChannelsCount
```

## Beispiel(e)

Dies gibt die Anzahl der Erwähnungen im angegebenen Text zurück:

```javascript
bot.command({
    name: 'mentionedChannelsCount',
    code: `
  $mentionedChannelsCount
  <#837531672341381190> <#869210515065426012> <#805852938661900>
  `
});
```
