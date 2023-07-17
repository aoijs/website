---
title: '$slowmode'
description: '$slowmode ändert den Sendermodus.'
id: slowmode
---

`$slowmode` wird den Zeitmodus eines Kanals ändern.

## Verwendung

```php
$slowmode[time;channelID?]
```

## Verwendung

| Feld       | Typ            | Beschreibung                               | Erforderlich |
| ---------- | -------------- | ------------------------------------------ |:------------:|
| Zeit       | string, Nummer | Der neue Zeitmodus des angegebenen Kanals. |     wahr     |
| channelID? | ganze Zahl     | Die ID des Kanals, der geändert wird.      |    falsch    |

Dies hat eine maximale Zeit von 21600000 Sekunden (6 Stunden).

## Beispiel(e)

Dies ändert den Zeitmodus des Kanals auf drei Minuten:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[3m;$channelID]`
});
```

Dies ändert den Zeitmodus des Kanals auf 6 Stunden:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[6h;$channelID]`
});
```