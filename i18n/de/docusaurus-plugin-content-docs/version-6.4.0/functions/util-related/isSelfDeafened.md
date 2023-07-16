---
title: $isSelfDeafened
description: '$isSelfDeafened ist ähnlich, aber nicht mit `$isDeafen`zu verwechseln, dies wird überprüfen, ob der Benutzer selbst taubte sich.'
id: isSelfDeafened
---

`$isSelfDeafened` ist ähnlich, sollte aber nicht mit `$isDeafen`verwechselt werden. Dies wird überprüfen, ob der Benutzer selbst taub ist.

## Verwendung

```php
$isSelfDeafened[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                  | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers, den du überprüfen möchtest, ob er taub ist. |    falsch    |
| guildID? | ganze Zahl | ID der Gilde, in der sie taub sind.                           |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob du taubst oder nicht:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
