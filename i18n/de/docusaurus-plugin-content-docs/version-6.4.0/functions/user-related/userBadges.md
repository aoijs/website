---
title: $userBadges
description: '$userBadges gibt die Abzeichen der angegebenen Benutzer zurück.'
id: userBadges
---

`$userBadges` gibt die Abzeichen des angegebenen Benutzers zurück.

## Verwendung

```php
$userBadges[userId?;sep?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                                         | Erforderlich |
| ------- | ---------- | ------------------------------------------------------------------------------------ |:------------:|
| userId? | ganze Zahl | Die ID des Benutzers, von dem Sie die Abzeichen wünschen.                            |    falsch    |
| sep?    | string     | Trennzeichen, um mehrere Abzeichen von jedem <br /> `,` (Standard) aufzuteilen |    falsch    |

## Beispiel(e)

Dies gibt deine Discord Abzeichen mit Komma getrennt zurück:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```