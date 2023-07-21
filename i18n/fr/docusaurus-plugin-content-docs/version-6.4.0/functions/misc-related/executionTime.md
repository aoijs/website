---
title: '$executionTime'
description: '$executionTime retournera le temps d''exécution.'
id: executionTime
---

`$executionTime` renverra le temps d'exécution.

## Utilisation

```php
$executionTime
```

## Exemple(s)

Cela retournera le temps d'exécution de combien de temps il a fallu pour exécuter ce code :

```javascript
bot.command({
    name: "executionTime",
    code: `
    Cela a pris : $executionTime Ms
  `
});
```