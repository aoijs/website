---
title: $title
description: '$title füge einen Titel zu einer Einbettung hinzu.'
id: title
---

`$title` füge einen Titel zu einem Einbettungsbett hinzu.

## Verwendung

```php
$title[index?;title;URL?]
```

## Verwendung

| Feld   | Typ    | Beschreibung                     | Erforderlich |
| ------ | ------ | -------------------------------- |:------------:|
| index? | anzahl | Der Index der Einbettung.        |    falsch    |
| titel  | string | Der Inhalt des Einbetttitels.    |     wahr     |
| URL?   | string | URL die der Hyperlink sein wird. |    falsch    |

## Beispiel(e)

Dies wird eine Einbettung mit einem Titel erstellen:

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`
});
```