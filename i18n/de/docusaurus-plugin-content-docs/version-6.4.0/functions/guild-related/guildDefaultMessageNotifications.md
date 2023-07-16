---
title: $guildDefaultMessageNotifications
description: '$guildDefaultMessageNotifications wird den Standard-Benachrichtigungstyp der Gilde zurückgeben.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` wird den Standard-Benachrichtigungstyp der Gilde zurückgeben.

## Verwendung

```php
$guildDefaultMessageNotifications[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt den Standard-Benachrichtigungstyp der Gilde zurück:

```javascript
bot.command({
    Name: 'guildDefaultMessageNotifications',
    Code: `
  $guildDefaultMessageNotifications
  `
});
```
