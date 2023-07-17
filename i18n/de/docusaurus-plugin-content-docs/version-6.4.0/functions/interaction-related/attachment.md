---
title: $attachment
description: '$attachment wird einen Anhang erstellen.'
id: attachment
---

`$attachment` wird einen Anhang erstellen.

## Verwendung

```php
$attachment[attachment;name;type?]
```

## Verwendung

| Feld   | Typ    | Beschreibung                                   | Erforderlich |
| ------ | ------ | ---------------------------------------------- |:------------:|
| anhang | string | Inhalt des Anhangs, vorzugsweise eine URL.     |     wahr     |
| name   | string | Anhang-Name.                                   |     wahr     |
| typ?   | string | Anhang-Typ. <br /> 1. **URL** (Standard) |    falsch    |

## Beispiel(e)

Dies wird einen Anhang erstellen:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
