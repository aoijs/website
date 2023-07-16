---
title: $creationDate
description: '$creationDate gibt das Erstellungsdatum des angegebenen Discord Benutzers zurück.'
id: creationDate
---

`$creationDate` gibt das Erstellungsdatum des angegebenen Discord Benutzers zurück.

## Verwendung

```php
$creationDate[id;format?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                      | Erforderlich |
| ------------ | ---------- | ----------------------------------------------------------------- |:------------:|
| id           | ganze Zahl | Benutzer-ID von wem Sie das Erstellungsdatum zurückgeben möchten. |     wahr     |
| formatieren? | string     | Das Format des Erstellungsdatums (unten aufgeführt).              |    falsch    |

### Format Input

| Format           | Ausgang                                                       |
| ---------------- | ------------------------------------------------------------- |
| M                | 1522158545409                                                 |
| datum            | 27.03.2018, 1:49:05 Uhr                                       |
| Zeit             | 4 Jahre, 9 Monate, 6 Tage, 2 Stunden, 17 Minuten, 33 Sekunden |
| zeitvoll         | 4 Jahre, 9 Monate, 6 Tage, 2 Stunden, 17 Minuten, 33 Sekunden |
| zeithumanisieren | 4y 9mon 6d 2h 24m 30s                                         |

## Beispiel(e)

Damit wird das Erstellungsdatum Ihres Kontos zurückgegeben:

```javascript
bot.command({
    name: 'creationDate',
    code: `
  Dein Account wurde erstellt: $creationDate[$authorID;date]
  `
});
```
