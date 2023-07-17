---
title: '$isGuildMuted'
description: '$isGuildMuted ist ähnlich, aber nicht zu verwechseln mit `$isMuted`, dies wird überprüfen, ob der Benutzer Server stumm ist.'
id: isGuildMuted
---

`$isGuildMuted` ist ähnlich, sollte aber nicht mit `$isMuted`verwechselt werden. Dies prüft ob der Benutzer stumm ist.

## Verwendung

```php
$isGuildMuted[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                               | Erforderlich |
| -------- | ---------- | -------------------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers, den Sie überprüfen möchten, ob der Server stumm ist. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde, in der sie Server stummgeschaltet sind.                  |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob du Server stumm bist oder nicht:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```
