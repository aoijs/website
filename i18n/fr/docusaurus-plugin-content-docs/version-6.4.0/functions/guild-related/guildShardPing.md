---
title: '$guildShardPing'
description: '$guildShardPing renverra la latence d''un shard spécifique.'
id: guildShardPing
---

`$guildShardPing` renverra la latence d'un shard spécifique.

## Utilisation

```php
$guildShardPing[IDshard?]
```

## Paramètres

| Champ    | Type   | Description    | Obligatoire |
| -------- | ------ | -------------- |:-----------:|
| IDshard? | entier | L'ID du shard. |    faux     |

**Notez que cela ne fonctionnera pas sans sharding. Si vous n'êtes pas sûr, consultez le[guide sharding](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Exemple(s)

Cela retournera la latence du shard dans le shard actuel:

```javascript
bot.command({
    name: 'serveurLatenceShard',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
