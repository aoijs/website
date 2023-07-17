---
title: $deleteIn
description: '$deleteIn wird eine Nachricht nach einer bestimmten Zeit löschen.'
id: deleteIn
---

`$deleteIn` wird eine Nachricht nach einer bestimmten Zeit löschen.

## Verwendung

```php
$deleteIn[time]
```

## Parameter

| Feld | Typ            | Beschreibung                                   | Erforderlich |
| ---- | -------------- | ---------------------------------------------- |:------------:|
| Zeit | string, Nummer | Nach wieviel Zeit die Nachricht gelöscht wird. |     wahr     |

## Beispiel(e)

Dies löscht die gesendete Nachricht nach fünf Sekunden:

```javascript
bot.command({
    name: 'deleteIn',
    code: `
  $deleteIn[5s]
  Ich werde diese Nachricht in 5 Sekunden löschen!
  `
});
```
