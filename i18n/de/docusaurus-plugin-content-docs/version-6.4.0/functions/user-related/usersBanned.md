---
title: $usersBanned
description: '$usersBanned wird die gesperrten Benutzer einer Gilde zurückgeben.'
id: usersBanned
---

`$usersBanned` wird die gesperrten Benutzer einer Gilde zurückgeben.

## Verwendung

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                                                                               | Erforderlich |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| guildID?   | ganze Zahl | Die Gilden-ID.                                                                                                                             |    falsch    |
| erzwingen? | boolean    | 1. **true** <br /> 2. **false** (Standard)                                                                                           |    falsch    |
| option?    | string     | Wie man die gesperrten Benutzer <br /> 1 zurückgibt. **id** (default) <br /> 1. **Benutzername** <br /> 1. **Erwähnung** |    falsch    |
| sep?       | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                                                                      |    falsch    |

## Beispiel(e)

Dies gibt die gebannten Nutzer deiner Gilde als Erwähnung in einer Einbettung zurück:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
