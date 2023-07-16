---
title: '$thumbnail'
description: '$thumbnail Füge ein Miniaturbild zu einem Einbettungsbild hinzu (rechts oben abgebildet).'
id: thumbnail
---

`$thumbnail` fügen Sie ein Miniaturbild zu einem Einbetten (rechts oben abgebildet).

## Verwendung

```php
$thumbnail[index?;URL]
```

## Verwendung

| Feld   | Typ    | Beschreibung              | Erforderlich |
| ------ | ------ | ------------------------- |:------------:|
| index? | anzahl | Position/Index einbetten. |    falsch    |
| URL    | string | Miniaturbild URL.         |     wahr     |

## Beispiel(e)

Dies wird ein Einbetten mit Ihrem Avatar erstellen:

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`
});
```