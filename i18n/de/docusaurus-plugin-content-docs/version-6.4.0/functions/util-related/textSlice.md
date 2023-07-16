---
title: '$textSlice'
description: '$textSlice schliesst eine Nachricht je nach den angegebenen Argumenten ab.'
id: textSlice
---

`$textSlice` wird eine Nachricht je nach den angegebenen Argumenten abschneiden.

## Verwendung

```php
$textSlice[text;from?;to]
```

## Verwendung

| Feld | Typ    | Beschreibung                                       | Erforderlich |
| ---- | ------ | -------------------------------------------------- |:------------:|
| text | string | Text, den Sie schneiden möchten.                   |     wahr     |
| aus? | anzahl | Startpunkt wo die Nachricht zerstreut werden soll. |    falsch    |
| zu   | anzahl | Endpunkt, an dem das Slicing endet.                |     wahr     |

## Beispiel(e)

Dies gibt `Hallo` zurück und entfernt `Bye` aus dem angegebenen Text:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```