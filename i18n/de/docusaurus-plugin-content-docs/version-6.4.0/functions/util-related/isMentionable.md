---
title: $isMentionable
description: '$isMentionable überprüfen, ob eine bestimmte Rolle erwähnt werden kann.'
id: isMentionable
---

`$isMentionable` überprüfen, ob eine bestimmte Rolle erwähnt werden kann.

## Verwendung

```php
$isMentionable[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                         | Erforderlich |
| -------- | ---------- | -------------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID, die überprüft, ob sie erwähnt werden kann oder nicht. |     wahr     |
| guildID? | ganze Zahl | ID der Gilde, in der die Rolle vorhanden ist.                        |    falsch    |

## Beispiel(e)

Wird überprüft, ob eine Rolle mit dem Namen `Besitzer` erwähnt werden kann und gibt entweder `true` oder `false` zurück:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```
