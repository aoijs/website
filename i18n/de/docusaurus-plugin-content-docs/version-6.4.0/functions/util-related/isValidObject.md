---
title: '$isValidObject'
description: '$isValidObject prüft, ob das angegebene json ein gültiges Objekt ist.'
id: isValidObject
---

`$isValidObject` prüft, ob das angegebene json ein gültiges Objekt ist.

## Verwendung

```php
$isValidObject[object]
```

## Verwendung

| Feld   | Typ    | Beschreibung | Erforderlich |
| ------ | ------ | ------------ |:------------:|
| objekt | objekt | JSON-Objekt. |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, da das angegebene Objekt ein gültiges JSON-Objekt ist:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
