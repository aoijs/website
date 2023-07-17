---
title: $author
description: '$author wird ein Autorenfeld zur Einbettung hinzufügen.'
id: author
---

`$author` fügt ein Autorenfeld zur Einbettung hinzu.

## Verwendung

```php
$author[index?;name;iconURL?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                         | Erforderlich |
| -------- | ---------- | ---------------------------------------------------- |:------------:|
| index?   | ganze Zahl | Index einbinden.                                     |    falsch    |
| name     | string     | Titel des Autors, der angezeigt wird.                |     wahr     |
| iconURL? | string     | Icon-URL, die neben dem Autorentitel angezeigt wird. |    falsch    |

## Beispiel(e)

Dies wird eine Einbettung mit Beschreibung und Titel des Autors erstellen:

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Hello!;$userAvatar[$authorID]]
  $description[Embed with author!]
  `
});
```
