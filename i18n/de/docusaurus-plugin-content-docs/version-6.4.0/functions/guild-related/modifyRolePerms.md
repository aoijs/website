---
title: '$modifyRolePerms'
description: '$modifyRolePerms wird die Berechtigungen einer bestimmten Rolle ändern.'
id: modifyRolePerms
---

`$modifyRolePerms` wird die Berechtigungen einer bestimmten Rolle ändern.

## Verwendung

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                            | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------------- |:------------:|
| guildID  | ganze Zahl | Die Gilden-ID, wo sich die Rolle befindet.                                              |     wahr     |
| roleID   | ganze Zahl | Rolle ID der Rolle, die geändert wird. / `$guildID` repräsentiert die `@everyone` Rolle |     wahr     |
| ...Perms | string     | Berechtigungen zum Ändern.                                                              |     wahr     |

|     | Beschreibung                                                     |
| --- | ---------------------------------------------------------------- |
| `-` | Verweigern Sie jemandem oder etwas eine bestimmte Berechtigung.  |
| `+` | Erlaube einer bestimmten Berechtigung für jemanden oder etwas.   |
| `/` | Setze eine bestimmte Berechtigung auf den Standardstatus zurück. |

Sie können alle Berechtigungen __[hier](../../guides/Client/2permissionsintents.md)__ finden.

## Beispiel(e)

Dies wird die Berechtigung einer bestehenden Rolle bearbeiten und erlaubt der Rolle "@everyone" Nachrichten zu senden und Reaktionen hinzuzufügen.

```javascript
bot.command({
    name: 'modifyRolePerms',
    code: `
  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]"
  }]
  `
});
```