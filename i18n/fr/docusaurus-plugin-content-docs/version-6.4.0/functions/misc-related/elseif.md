---
title: '$elseif'
description: '$elseif est utilisé pour créer une instruction sinon avec une condition.'
id: elseif
---

`$elseif` est utilisé pour créer une instruction sinon avec une condition.

## Utilisation

```php
$elseif[condition]
```

:::avertissement de dépréciation


`$if: "old"` est obsolète et ne doit plus être utilisé car il sera supprimé dans le futur.

:::


## Exemple(s)

Exemple d'utilisation de `$if: "old"` (retournera "Bonjour" lorsque la condition est vraie) :

Vous avez besoin de `$endelseif` pour mettre fin à la déclaration `$elseIf`.

```javascript
bot.command({
    name : "if",
    $if: "old",
    code: `
  $if[1==2]
  Bonjour !
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```