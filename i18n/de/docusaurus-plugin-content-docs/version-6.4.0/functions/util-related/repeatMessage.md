---
title: $repeatMessage
description: '$repeatMessage wiederholt den angegebenen Text für die angegebene Zeitanzahl.'
id: repeatMessage
---

`$repeatMessage` wiederholt den angegebenen Text für die angegebene Zeitanzahl.

## Verwendung

```php
$repeatMessage[time;text]
```

## Verwendung

| Feld | Typ        | Beschreibung                      | Erforderlich |
| ---- | ---------- | --------------------------------- |:------------:|
| Zeit | ganze Zahl | Wie oft der Text wiederholt wird. |     wahr     |
| text | string     | Der Text, der wiederholt wird.    |     wahr     |

## Beispiel(e)

Dies wird zwanzigmal `Hallo` zurückgeben:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
