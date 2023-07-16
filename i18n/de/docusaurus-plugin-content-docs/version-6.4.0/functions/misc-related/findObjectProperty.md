---
title: $findObjectProperty
description: '$findObjectProperty sucht nach einem bestimmten Objekt und gibt es zurück.'
id: findObjectProperty
---

`$findObjectProperty` sucht nach einer bestimmten Eigenschaft eines Objekts und gibt es zurück.

## Verwendung

```php
$findObjectProperty[property;object]
```

## Verwendung

| Feld   | Typ    | Beschreibung            | Erforderlich |
| ------ | ------ | ----------------------- |:------------:|
| objekt | string | Name der Eigenschaft.   |     wahr     |
| objekt | objekt | Das zu suchende Objekt. |     wahr     |

## Beispiel(e)

Dies gibt `{"object": "property"}` zurück, da es "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```
