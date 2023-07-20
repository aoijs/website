---
title: '$spawnShard'
description: '$spawnShard wird einen Splitter spawnen.'
id: spawnShard
---

`$spawnShard` wird eine Scherbe spawnen, erfordert Scherben.

## Verwendung

```php
$spawnShard[shard]
```

## Verwendung

| Feld    | Typ    | Beschreibung         | Erforderlich |
| ------- | ------ | -------------------- |:------------:|
| scherbe | anzahl | Anzahl der Scherben. |     wahr     |

## Beispiel(e)

Dies spawnt Scherbe `1`:

```javascript
bot.command({
    Name: 'spawnShard',
    Code: `
   $spawnShard[1]`
});
```