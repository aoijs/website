---
title: '$endif'
description: '$endif wird verwendet, um eine if -Anweisung zu beenden.'
id: endif
---

`$endif` wird verwendet, um eine if -Anweisung zu beenden.

## Verwendung

```php
$endif
```

:::Warnung Deprecation


`$if: "alt"` ist veraltet und sollte nicht mehr verwendet werden, da es in Zukunft entfernt wird.

:::


## Beispiel(e)

Beispiel Verwendung von `$if: Alt` (wird "Hallo" zurückgeben, wenn die Bedingung wahr ist):

```javascript
bot.command({
    name: "endif",
    $if: "alt",
    code: `
  $if[1==1]
  Hallo!
  $endif
  `
});
```