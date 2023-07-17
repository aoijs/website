---
title: $image
description: '$image wird ein Bild zu einer Einbettung hinzufügen.'
id: image
---

`$image` wird ein Bild zu einer Einbettung hinzufügen.

## Verwendung

```php
$image[index?;URL]
```

## Verwendung

| Feld   | Typ    | Beschreibung                       | Erforderlich |
| ------ | ------ | ---------------------------------- |:------------:|
| index? | anzahl | Index einbinden                    |    falsch    |
| URL    | string | Bild-URL einbetten. (unteres Bild) |     wahr     |

## Beispiel(e)

Dies wird eine Einbettung mit Bild, Titel und Fußzeile erstellen:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```