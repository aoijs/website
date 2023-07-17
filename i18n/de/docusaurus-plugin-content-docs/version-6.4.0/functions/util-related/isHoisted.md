---
title: $isHoisted
description: '$isHoisted wird prüfen, ob eine bestimmte Rolle gejagt wird.'
id: isHoisted
---

`$isHoisted` wird überprüfen, ob eine bestimmte Rolle gejagt wird.

## Verwendung

```php
$isHoisted[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                          | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | ID der Rolle, die du überprüfen möchtest, ob sie gefahren ist oder nicht.             |     wahr     |
| guildID? | ganze Zahl | Die ID der Gilde, in der du überprüfen möchtest, ob die Rolle gehegt wird oder nicht. |    falsch    |

## Beispiel(e)

Dies wird überprüft, ob eine Rolle mit dem Namen `Besitzer` auf Ihrem Server angehoben wurde:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```
