---
title: $randomText
description: '$randomText gibt ein zufälliges Wort aus der angegebenen Abfrage zurück'
id: randomText
---

`$randomText` gibt ein zufälliges Wort aus der angegebenen Abfrage zurück

## Verwendung

```php
$randomText[text;text;...]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                      | Erforderlich |
| ---- | ------ | ----------------------------------------------------------------- |:------------:|
| text | string | Alle Wörter/Sätze/Buchstaben, die Sie zufällig auswählen möchten. |     wahr     |

## Beispiel(e)

Dies gibt einen zufälligen Text aus `Hallo, Bye, Goodnight, siehe`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
