---
title: '$endelseif'
description: '$endelseif est utilisé pour terminer une instruction elseif.'
id: endelseif
---

`$endelseif` est utilisé pour terminer une instruction elseif.

## Utilisation

```php
$endelseif
```

:::avertissement de dépréciation


`$if: "old"` est obsolète et ne doit plus être utilisé car il sera supprimé dans le futur.

:::


## Exemple(s)

Exemple d'utilisation de `$if: "old"` (retournera "Bonjour !" lorsque la condition est vraie):

```javascript
bot.command({
    name : "if",
    $if: "old",
    code: `
  $if[1==2]
  Bonjour!
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```