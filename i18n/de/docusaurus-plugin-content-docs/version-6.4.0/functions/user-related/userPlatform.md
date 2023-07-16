---
title: $userPlatform
description: '$userPlatform wird die Plattform zurückgeben, mit der der Benutzer Discord benutzt.'
id: userPlatform
---

`$userPlatform` wird die Plattform zurückgeben, mit der der Benutzer Discord benutzt.

## Verwendung

```php
$userPlatform[userID?;guildID?;sep?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                         | Erforderlich |
| -------- | ---------- | ---------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers.                                    |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID, wo der Benutzer anwesend ist.         |    falsch    |
| sep?     | string     | Das Trennzeichen zum Aufteilen mehrerer Plattformen. |    falsch    |

### Plattformen:
- **Web** - Der Benutzer benutzt derzeit den Web-Client.
- **mobile** - Der Benutzer benutzt die mobile App.
- **Desktop** - Der Benutzer verwendet die Desktop-App.
- **keine** - Der Benutzer ist entweder offline oder kann die Plattform nicht abrufen.

## Beispiel(e)

Dies wird deine Plattform zurückgeben, auf der du Discord nutzt:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
