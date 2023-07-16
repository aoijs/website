---
title: $isBanned
description: '$isBanned prüft, ob ein bestimmter Benutzer in einer bestimmten Gilde gebannt wird.'
id: isBanned
---

`$isBanned` prüft, ob ein bestimmter Benutzer in einer bestimmten Gilde verboten ist.

## Verwendung

```php
$isBanned[guildID;userID]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                          | Erforderlich |
| ------- | ---------- | --------------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | ID der Gilde zu überprüfen, ob der Benutzer gebannt ist oder nicht.   |     wahr     |
| userID  | ganze Zahl | ID des Benutzers, der überprüft wird, ob er gebannt wurde oder nicht. |     wahr     |

## Beispiel(e)

Dies wird zurückgegeben `false` da du nicht in dieser Gilde gebannt bist:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
