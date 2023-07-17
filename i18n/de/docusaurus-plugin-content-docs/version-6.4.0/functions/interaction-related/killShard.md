---
title: '$killShard'
description: '$killShard wird einen bestimmten Scherben töten.'
id: killShard
---

`$killShard` wird einen bestimmten Scherben töten. (erfordert Scherben)

## Verwendung

```php
$killShard[shardID]
```

## Verwendung

| Feld    | Typ    | Beschreibung  | Erforderlich |
| ------- | ------ | ------------- |:------------:|
| spardID | anzahl | Die Shard-ID. |     wahr     |

## Beispiel(e)

Dies beendet die aktuelle Scherbe (erfordert **Teilen**):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
