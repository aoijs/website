---
title: '$endif'
description: '$endif est utilisé pour terminer une instruction Si.'
id: endif
---

`$endif` est utilisé pour terminer une instruction si.

## Utilisation

```php
$endif
```

:::avertissement de dépréciation


`$if: "old"` est obsolète et ne doit plus être utilisé car il sera supprimé dans le futur.

:::


## Exemple(s)

Exemple d'utilisation de `$if: "old"` (retournera "Bonjour !" lorsque la condition est vraie) :

```javascript
bot.command({
    name : "endif",
    $if: "old",
    code: `
  $if[1==1]
  Bonjour !
  $endif
  `
});
```