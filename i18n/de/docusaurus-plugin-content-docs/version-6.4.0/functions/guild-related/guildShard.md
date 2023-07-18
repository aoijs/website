---
title: '$guildShard'
description: '$guildShard wird die Gilden eines bestimmten Schardners zurückgeben.'
id: guildShard
---

`$guildShard` wird die Gilden eines bestimmten Scherbens zurückgeben.

## Verwendung

```php
$guildShard[option?;sep?;shardId]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                                                    | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------------------------------------- |:------------:|
| option? | ganze Zahl | Option um die Gilden in <br /> 1 zurückzugeben. **id** (default) <br /> 2. **Name** |    falsch    |
| sep?    | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                           |    falsch    |
| spardId | ganze Zahl | Die Shard-ID.                                                                                   |     wahr     |

#### Beachten Sie, dass dies nicht ohne sharding funktioniert. Wenn Sie sich nicht sicher sind, lesen Sie die [Freigabeanleitung](../../guides/client/6sharding.md).

## Beispiel(e)

Dies gibt die Anzahl der Gilden einer Scherbe zurück:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
