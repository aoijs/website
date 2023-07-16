---
title: $formatDate
description: '$formatDate formatiert ein bestimmtes Datum.'
id: formatDate
---

`$formatDate` formatiert ein bestimmtes Datum.

## Verwendung

```php
$formatDate[date;format?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                                              | Erforderlich |
| ------------ | ------ | ------------------------------------------------------------------------- |:------------:|
| datum        | anzahl | Das Datum, das Sie formatieren möchten.                                   |     wahr     |
| formatieren? | string | Das Format, das benutzt wird, um das Datum anzuzeigen (unten aufgeführt). |    falsch    |

<details open>
  <summary> <h2> Mögliche Formatierung </h2></summary>

| Format |                                                             | Retouren |
| ------ | ----------------------------------------------------------- | --------:|
| dddd   | Rückkehr der Woche, Montag, Dienstag, Mittwoch ...          |   String |
| dd     | Gibt die Abkürzung des Wochentags, Mon, Di, Mi ...          |   String |
| D      | Gibt den Tag des Monats zurück                              |   Nummer |
| DD     | Gibt den Tag des Monats zurück                              |   String |
| DDD    | Gibt den Tag des Jahres zurück, 256, 257 ...                |   Nummer |
| M / MM | Gibt den Monat des Jahres zurück, 10, 11 ...                |   Nummer |
| MMM    | Gibt die Abkürzung des Monats, Jan, Feb ...                 |   String |
| MMMM   | Rettet den Monat vollständig Januar, Februar ...            |   String |
| JJJJ   | Rettet Jahr voll, 2020, 2021 ...                            |   Nummer |
| JJ     | Gibt die letzten zwei Ziffern des Jahres zurück, 20, 21 ... |   Nummer |

</details>

## Beispiel(e)

Dies gibt Ihr aktuelles Datum im `Format DD MMMM YYYY` zurück:

```javascript
bot.command({
    name: 'formatDate',
    code: `
  $formatDate[$dateStamp;dddd, DD MMMM YYYY]
  `
});
```
