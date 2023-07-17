---
title: $if
description: '$if wird eine Bedingung überprüfen und entweder true oder false zurückgeben, abhängig davon, ob die Bedingung wahr oder falsch ist.'
id: if
---

`$if` überprüft eine Bedingung und gibt entweder true oder false zurück, abhängig davon, ob die Bedingung wahr oder falsch ist.

## Verwendung

```php
$if[condition;true;false?]
```

:::Warnung Deprecation


`$if: "alt"` ist veraltet und sollte nicht mehr verwendet werden, da es in Zukunft entfernt wird.

:::


## Verwendung

| Feld      | Typ    | Beschreibung                                      | Erforderlich |
| --------- | ------ | ------------------------------------------------- |:------------:|
| bedingung | string | Bedingung zu überprüfen.                          |     wahr     |
| wahr      | string | Was zurück, wenn die Bedingung wahr ist.          |     wahr     |
| falsch?   | string | Was zurückzugeben, wenn die Bedingung falsch ist. |    falsch    |

#### Gültige mathematische Operatoren

| Operator | Mathematischer Ausdruck |
| -------- | ----------------------- |
| ==       | gleich zu               |
| !=       | ungleich wie            |
| <=       | kleiner oder gleich wie |
| \>=     | größer als oder gleich  |
| \>      | größer als              |
| <        | weniger als             |
| \       | \| logisch ODER        |
| &&       | logisches UND           |

## Beispiel(e)

Dies wird `Das ist falsch!` als `1` entspricht nicht `2`:

```javascript
bot.command({
    Name: "if",
    Code: `
    $if[1==2;That's true!;That's false!]
    `
});
```

Dies wird genau die gleiche Verwendung von `$if` mit `$if: "alt"`:

```javascript
bot.command({
    -Name: "if",
    $if: "alt",
    Code: `
    $if[1==2]
    Das ist wahr!
    $else
    Das ist falsch!
    $endif
    `
});
```