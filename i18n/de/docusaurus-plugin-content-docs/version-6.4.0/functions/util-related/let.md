---
title: $let
description: '$let wird zum Speichern von temporären Variablen verwendet.'
id: let
---

`$let` speichert temporäre Variablen, die von `$get` abgerufen werden können.

## Verwendung

```php
$let[varname;value]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                             | Erforderlich |
| ------- | ------ | -------------------------------------------------------- |:------------:|
| varname | string | Name der temporären Variable.                            |     wahr     |
| wert    | string | Wert der temporären Variable, die Sie speichern möchten. |     wahr     |

## Beispiel(e)

Dies gibt `Ayaka` von `$get` zurück:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
