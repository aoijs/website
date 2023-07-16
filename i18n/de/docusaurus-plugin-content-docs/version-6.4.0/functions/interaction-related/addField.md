---
title: $addField
description: '$addField fügt ein Feld in eine Einbettung ein.'
id: addField
---

`$addField` fügt ein Feld in ein Bett.

## Verwendung

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## Verwendung

| Feld              | Typ     | Beschreibung                 | Erforderlich |
| ----------------- | ------- | ---------------------------- |:------------:|
| fieldTitle?       | string  | Der Titel des Feldes.        |     wahr     |
| feldbeschreibung? | string  | Die Beschreibung des Feldes. |     wahr     |
| inline?           | boolean | Wenn das Feld inline ist.    |    falsch    |

## Beispiel(e)

Dies wird eine Einbettung mit einem Feld und einer Beschreibung senden:

```javascript
bot.command({
    Name: 'addField',
    Code: `
  $addField[Example;Look at this!;false]
  $description[Hello!]
  `
});
```
