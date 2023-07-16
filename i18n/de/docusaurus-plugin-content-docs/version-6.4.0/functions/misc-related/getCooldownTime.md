---
title: '$getCooldownTime'
description: '$getCooldownTime gibt die Abklingzeit eines bestimmten Befehls zurück.'
id: getCooldownTime
---

`$getCooldownTime` gibt die Abklingzeit eines Befehls zurück.

## Verwendung

```php
$getCooldownTime[time;type;command;id]
```

## Verwendung

| Feld   | Typ        | Beschreibung                                                                                                                                                   | Erforderlich |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| Zeit   | string     | Die Zeit der Abklingzeit.                                                                                                                                      |     wahr     |
| typ    | string     | Abklingzeit Typ <br /> 1. **globalUser** <br /> 2. **Benutzer** <br /> 3. **Server** <br /> 4. **Kanal** <br /> 5. **statische** |     wahr     |
| befehl | string     | Befehlsname.                                                                                                                                                   |     wahr     |
| id     | ganze Zahl | User/Gild/Channel/Nachricht ID.                                                                                                                                |     wahr     |

## Beispiel(e)

Dies gibt die verbleibende Abklingzeit des Befehls "getCooldownTime" zurück:

```javascript
bot.command({
    name: "getCooldownTime",
    code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `
});
```