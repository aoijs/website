---
title: '$isSelfMuted'
description: '$isSelfMuted ist ähnlich, aber nicht mit `$isMuted`zu verwechseln, dies wird überprüfen, ob der Benutzer selbst stumm gemacht hat.'
id: isSelfMuted
---

$isSelfMuted ist ähnlich, aber nicht mit `$isMuted`zu verwechseln, dies wird überprüfen, ob der Benutzer selbst stumm gemacht hat.

## Verwendung

```php
$isSelfMuted[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                   | Erforderlich |
| -------- | ---------- | -------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers, den Sie überprüfen möchten, ob er stumm ist. |    falsch    |
| guildID? | ganze Zahl | ID der Gilde, in der sie stumm sind.                           |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob du stumm bist (Sprachkanal) oder nicht:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
