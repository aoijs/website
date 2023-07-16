---
title: '$stopTimeout'
description: '$stopTimeout wird ein von $setTimeout erstelltes Timeout beenden/stoppen.'
id: stopTimeout
---

`$stopTimeout` wird ein Timeout beenden/stoppen, das von `$setTimeout` erstellt wurde.

## Verwendung

```php
$stopTimeout[id]
```

## Verwendung

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| id   | string | Timeout-ID.  |     wahr     |

## Beispiel(e)

Damit endet ein `$setTimeout` Timeout:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```