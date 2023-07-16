---
title: $deleteVar
description: '$deleteVar wird eine angegebene Variable löschen.'
id: deleteVar
---

`$deleteVar` wird eine bestimmte Variable löschen.

## Verwendung

```php
$deleteVar[variable;id;table?]
```

## Verwendung

| Feld     | Typ            | Beschreibung                                  | Erforderlich |
| -------- | -------------- | --------------------------------------------- |:------------:|
| variabel | string, Nummer | Variablenname.                                |     wahr     |
| id       | ganze Zahl     | ID der zu löschenden Variable ( userID etc.). |     wahr     |
| Tabelle? | string         | Variable Tabelle.                             |    falsch    |

## Beispiel(e)

Dies löscht eine Variable namens "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```