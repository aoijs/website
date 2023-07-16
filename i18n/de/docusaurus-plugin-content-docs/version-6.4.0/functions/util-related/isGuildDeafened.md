---
title: $isGuildDeafened
description: '$isGuildDeafened ist ähnlich, aber nicht mit `$isDeafen` zu verwechseln, dies wird überprüfen, ob der Benutzer taub ist.'
id: isGuildDeafened
---

`$isGuildDeafened` ist ähnlich, sollte aber nicht mit `$isDeafen`verwechselt werden. Dies wird überprüfen, ob der Benutzer taub ist.

## Verwendung

```php
$isGuildDeafened[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                      | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers, den du überprüfen möchtest, ob er taub ist. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde, in der sie Server sind, taubte ein.             |    falsch    |

## Beispiel(e)

Dies wird entweder `true` oder `false` zurückgeben, je nachdem, ob du Server taubst oder nicht:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
