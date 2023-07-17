---
title: $onlyForCategories
description: '$onlyForCategories wird überprüfen, ob der Befehl in der Kategorie des Ausführungskanals ausgeführt wurde, und wenn nicht, eine Fehlermeldung zurückgeben.'
id: onlyForCategories
---

`$onlyForCategories` wird überprüfen, ob der Befehl in der Kategorie des Ausführungskanals ausgeführt wurde, und falls nicht, eine Fehlermeldung zurückgeben.

## Verwendung

```php
$onlyForCategories[...categoryIds;error]
```

## Verwendung

| Feld             | Typ              | Beschreibung                                                                                      | Erforderlich |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------- |:------------:|
| ...Kategorie-Ids | string, Ganzzahl | Kategorien, auf die Sie den Befehl beschränken möchten.                                           |     wahr     |
| fehlerhaft       | string           | Fehler beim Zurückgeben, wenn der Befehl in keiner der aufgelisteten Kategorien ausgeführt wurde. |     wahr     |

## Beispiel(e)

Dies beschränkt den Befehl nur auf bestimmte Kanalkategorien:

```javascript
bot.command({
    name: "onlyForCategories",
    code: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `
});
```