---
title: $elseif
description: '$elseif wird verwendet, um eine andere Anweisung mit Bedingung zu erstellen.'
id: elseif
---

`$elseif` wird verwendet, um eine andere Anweisung mit Bedingung zu erstellen.

## Verwendung

```php
$elseif[condition]
```

:::Warnung Deprecation


`$if: "alt"` ist veraltet und sollte nicht mehr verwendet werden, da es in Zukunft entfernt wird.

:::


## Beispiel(e)

Beispiel Verwendung von `$if: Alt` (wird "Hallo" zurückgeben, wenn die Bedingung wahr ist):

Sie benötigen `$endelseif` um die `$elseIf` Anweisung zu beenden.

```javascript
bot.command({
    -Name: "if",
    $if: "alt",
    Code: `
  $if[1==2]
  Hallo!
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```