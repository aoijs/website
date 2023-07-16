---
title: $description
description: '$description wird für Einbettungen verwendet, um ein Beschreibungsfeld hinzuzufügen.'
id: description
---

`$description` wird für Einbettungen verwendet, um ein Beschreibungsfeld hinzuzufügen.

## Verwendung

```php
$description[index?;description]
```

## Verwendung

| Feld         | Typ    | Beschreibung                        | Erforderlich |
| ------------ | ------ | ----------------------------------- |:------------:|
| index?       | anzahl | Der Einbett-Index.                  |    falsch    |
| beschreibung | string | Der Inhalt der Einbettbeschreibung. |     wahr     |

## Beispiel(e)

Dies sendet eine Einbettung mit dem Inhalt `aoi.js ist großartig!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```