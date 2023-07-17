---
title: '$parseDate'
description: '$parseDate gibt das Datum/die Zeit für die angegebenen Millisekunden zurück'
id: parseDate
---

`$parseDate` $parseDate gibt das Datum/die Zeit für die angegebenen Millisekunden zurück

## Verwendung

```php
$parseDate[ms;type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                              | Erforderlich |
| ---- | ------ | --------------------------------------------------------- |:------------:|
| M    | string | Zeit in ms die Sie analysieren möchten.                   |     wahr     |
| typ? | string | Der Typ, in dem das analysierte Datum zurückgegeben wird. |    falsch    |

### Typen

| Typ   | Format                                                      |
| ----- | ----------------------------------------------------------- |
| Zeit  | 1 Jahr, 1 Woche, 6 Tage, 8 Stunden, 16 Minuten, 20 Sekunden |
| datum | 1/1/2023, 8:16:20 Uhr                                       |

## Beispiel(e)

Das aktuelle Datum wird im `Datum` [Format](#types) zurückgegeben :

```javascript
bot.command({
    name: 'parseDate',
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
