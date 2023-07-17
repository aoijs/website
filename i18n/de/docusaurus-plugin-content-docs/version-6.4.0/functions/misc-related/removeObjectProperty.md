---
title: '$removeObjectProperty'
description: '$removeObjectProperty wird eine Eigenschaft eines Objekts entfernen.'
id: removeObjectProperty
---

`$removeObjectProperty` wird eine Eigenschaft eines bestimmten Objekts entfernen.

## Verwendung

```php
$removeObjectProperty[property;object]
```

## Verwendung

| Feld   | Typ    | Beschreibung          | Erforderlich |
| ------ | ------ | --------------------- |:------------:|
| objekt | string | Name der Eigenschaft. |     wahr     |
| objekt | objekt | Das Objekt.           |     wahr     |

## Beispiel(e)

Dies wird `Ferel` aus dem angegebenen Objekt entfernen:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
