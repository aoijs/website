---
title: $clientLeave
description: '$clientLeave lässt deinen Bot einen bestimmten Server verlassen.'
id: clientLeave
---

`$clientLeave` wird Ihren Bot einen bestimmten Server verlassen.

## Verwendung

```php
$clientLeave[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                  | Erforderlich |
| -------- | ---------- | --------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde, die Ihr Bot verlassen soll. |    falsch    |

## Beispiel(e)

Dies lässt deinen Bot die aktuelle Gilde verlassen:

```javascript
bot.command({
    Name: 'clientLeave',
    Code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  `
});
```
