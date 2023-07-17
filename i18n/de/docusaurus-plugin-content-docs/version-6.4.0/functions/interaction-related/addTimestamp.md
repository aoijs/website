---
title: '$addTimestamp'
description: '$addTimestamp wird einen Zeitstempel zur Einbettung hinzufügen.'
id: addTimestamp
---

`$addTimestamp` wird einen Zeitstempel zu einer Einbettung hinzufügen.

## Verwendung

```php
$addTimestamp[ms?]
```

## Verwendung

| Feld | Typ        | Beschreibung | Erforderlich |
| ---- | ---------- | ------------ |:------------:|
| M    | ganze Zahl | Epochenzeit. |    falsch    |

## Beispiel(e)

Dies wird eine Einbettung mit Zeitstempel und Beschreibung erstellen:

```javascript
bot.command({
    Name: 'addTimestamp',
    Code: `
  $description[Hello!]
  $addTimestamp
  `
});
```
