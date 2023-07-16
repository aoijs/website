---
title: $get
description: '$get wird zum Abrufen von temporären Variablen verwendet.'
id: get
---

`$get` wird temporäre Variablen abrufen, die von `$let` gespeichert werden.

## Verwendung

```php
$get[var]
```

## Verwendung

| Feld | Typ    | Beschreibung                                 | Erforderlich |
| ---- | ------ | -------------------------------------------- |:------------:|
| var  | string | Temporäre Variable, die Sie abrufen möchten. |     wahr     |

## Beispiel(e)

Dies gibt `Leref` von `$let` zurück:

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js Entwickler: $get[developer]
$let[developer;Leref]
`
});
```
