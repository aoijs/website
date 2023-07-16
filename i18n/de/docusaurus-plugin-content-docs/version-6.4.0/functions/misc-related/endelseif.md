---
title: '$endelseif'
description: '$endelseif wird verwendet, um eine Anweisung für andere Zwecke zu beenden.'
id: endelseif
---

`$endelseif` wird verwendet, um eine Anweisung für andere Zwecke zu beenden.

## Verwendung

```php
$endelseif
```

:::Warnung Deprecation


`$if: "alt"` ist veraltet und sollte nicht mehr verwendet werden, da es in Zukunft entfernt wird.

:::


## Beispiel(e)

Beispiel Verwendung von `$if: Alt` (wird "Hallo" zurückgeben, wenn die Bedingung wahr ist):

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