---
title: '$guildShard'
description: '$guildShard renverra le nombre de serveurs dans un shard spécifique.'
id: guildShard
---

`$guildShard` renverra le nombre de serveurs dans un shard spécifique.

## Utilisation

```php
$guildShard[option?;séparateur?;IDshard]
```

## Paramètres

| Champ       | Type                 | Description                                                                                 | Obligatoire |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------- |:-----------:|
| option?     | entier               | Comment renvoyer les serveurs? <br /> 1. **id** (par défaut) <br /> 2. **name** |    faux     |
| séparateur? | chaîne de caractères | Séparateur pour séparer les serveurs qui seront renvoyés.                                   |    faux     |
| IDshard     | entier               | L'ID du shard.                                                                              |    vrai     |

#### Notez que cela ne fonctionnera pas sans sharding. Si vous n'êtes pas sûr, consultez [le guide sharding](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).

## Exemple(s)

Cela renverra le nombre de serveurs d'un shard:

```javascript
bot.command({
    name: 'serveurShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
