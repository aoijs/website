---
title: $editIn
description: '$editIn wird eine Nachricht nach einer bestimmten Zeit bearbeiten.'
id: editIn
---

`$editIn` wird eine Nachricht nach einer bestimmten Zeit bearbeiten.

## Verwendung

```php
$editIn[time;...content]
```

## Parameter

| Feld   | Typ            | Beschreibung                                     | Erforderlich |
| ------ | -------------- | ------------------------------------------------ |:------------:|
| Zeit   | string, Nummer | Nach wieviel Zeit die Nachricht bearbeitet wird. |     wahr     |
| inhalt | string         | Wie der neue Inhalt der Nachricht sein sollte.   |     wahr     |

## Beispiel(e)

Dies wird die gesendete Nachricht nach fünf Sekunden bearbeiten:

```javascript
bot.command({
    Name: 'editIn',
    Code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  Ich werde diese Nachricht in 5 Sekunden bearbeiten!
  `
});
```
