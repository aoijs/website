---
title: '$createVar'
description: '$createVar wird eine neue Variable erstellen.'
id: createVar
---

`$createVar` wird eine neue Variable erstellen.

## Verwendung

```php
$createVar[table;...vars]
```

## Verwendung

| Feld    | Typ    | Beschreibung            | Erforderlich |
| ------- | ------ | ----------------------- |:------------:|
| tabelle | string | Variable Tabelle.       |     wahr     |
| ...vars | string | Variablenname und Wert. |     wahr     |

## Beispiel(e)

Dies wird eine neue Variable mit dem Namen "Variable" und dem Wert von "Wert" erstellen:

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```