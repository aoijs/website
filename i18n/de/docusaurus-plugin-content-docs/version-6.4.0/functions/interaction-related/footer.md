---
title: $footer
description: '$footer wird eine Fußzeile zu einer Einbettung hinzufügen.'
id: footer
---

`$footer` wird eine Fußzeile zu einer Einbettung hinzufügen.

## Verwendung

```php
$footer[index?;content;iconURL?]
```

## Verwendung

| Feld     | Typ            | Beschreibung                        | Erforderlich |
| -------- | -------------- | ----------------------------------- |:------------:|
| index?   | anzahl         | Index einbinden.                    |    falsch    |
| inhalt   | string, Nummer | Inhalt des Fußzeilentextes.         |     wahr     |
| iconURL? | string         | Fußzeile-Symbol (unten links Bild). |    falsch    |

## Beispiel(e)

Dies wird eine Einbettung mit Fußzeile und Titel erstellen:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `
});
```