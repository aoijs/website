---
title: $findMembers
description: '$findMembers wird alle Mitglieder mit ähnlichem Benutzernamen zurückgeben.'
id: findMembers
---

`$findMembers` wird alle Mitglieder mit gleichem Benutzernamen zurückgeben.

## Verwendung

```php
$findMembers[userResolver;limit?;type?;force?;format?]
```

## Verwendung

| Feld         | Typ     | Beschreibung                                                                   | Erforderlich |
| ------------ | ------- | ------------------------------------------------------------------------------ |:------------:|
| userResolver | string  | Abfrage des Benutzernamens, nach dem der Bot sucht.                            |     wahr     |
| begrenzen?   | anzahl  | Die Anzahl der Ergebnisse, die der Bot zurückgibt.                             |    falsch    |
| typ?         | string  | Typ der Suchabfrage.                                                           |    falsch    |
| erzwingen?   | boolean | 1. **true** <br /> 2. **false** (Standard)                               |    falsch    |
| formatieren? | string  | Das Format, das der Bot die gefundenen Benutzer zurückgibt (unten aufgeführt). |    falsch    |

### Parameter für das `Format` Argument

* {position} -> gibt die Position zurück
* {id} -> gibt die Benutzer-ID zurück
* {username} -> gibt den Benutzernamen zurück
* {nick} -> gibt den Nickname zurück
* {tag} -> gibt den Nutzer-Diskriminator zurück

## Beispiel(e)

Dies gibt zwanzig Mitglieder mit `Leref` in ihrem Benutzernamen zurück:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```
