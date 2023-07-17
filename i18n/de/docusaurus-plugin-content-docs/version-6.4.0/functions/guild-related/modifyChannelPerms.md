---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms wird die Berechtigung eines bestimmten Kanals ändern.'
id: modifyChannelPerms
---

`$modifyChannelPerms` wird die Berechtigung eines Kanals ändern.

## Verwendung

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                                | Erforderlich |
| --------- | ---------- | ------------------------------------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die Kanal-ID, von der du versuchst, seine Berechtigungen zu ändern.                         |     wahr     |
| roruID    | ganze Zahl | Die ID eines Benutzers oder einer Rolle. ( `$guildID` repräsentiert die Rolle `@everyone` ) |     wahr     |
| ...Perms  | string     | Die Berechtigungen die geändert werden.                                                     |     wahr     |

|     | Beschreibung                                                     |
| --- | ---------------------------------------------------------------- |
| `-` | Verweigern Sie jemandem oder etwas eine bestimmte Berechtigung.  |
| `+` | Erlaube einer bestimmten Berechtigung für jemanden oder etwas.   |
| `/` | Setze eine bestimmte Berechtigung auf den Standardstatus zurück. |

Sie können alle Berechtigungen __[hier](../../guides/Client/2permissionsintents.md)__ finden.

## Beispiel(e)

Dies erlaubt `@everyone` Nachrichten zu senden und Reaktionen im aktuellen Kanal hinzuzufügen:

```javascript
bot.command({
    Name: 'modifyChannelPerms',
    Code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
