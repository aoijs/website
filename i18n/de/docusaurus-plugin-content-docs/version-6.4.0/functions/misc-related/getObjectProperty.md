---
title: '$getObjectProperty'
description: '$getObjectProperty gibt eine Objekteigenschaft eines bestimmten Objekts zurück.'
id: getObjectProperty
---

`$getObjectProperty` gibt eine Objekteigenschaft eines bestimmten Objekts zurück.

## Verwendung

```php
$getObjectProperty[name]
```

## Verwendung

| Feld | Typ    | Beschreibung                | Erforderlich |
| ---- | ------ | --------------------------- |:------------:|
| name | string | Name der Objekteigenschaft. |     wahr     |

## Beispiel(e)

Dies gibt die Objekteigenschaft von "Hallo" zurück, die in `$createObject` erstellt wurde:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```