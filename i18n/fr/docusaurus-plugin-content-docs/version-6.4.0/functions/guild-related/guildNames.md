---
title: '$guildNames'
description: '$guildNames renverra tous les noms de serveurs dans lesquels votre bot est.'
id: guildNames
---

`$guildNames` renverra tous les noms de serveurs dans lesquels votre bot est.

## Utilisation

```php
$guildNames[séparateur?]
```

## Paramètres

| Champ       | Type                 | Description                                            | Obligatoire |
| ----------- | -------------------- | ------------------------------------------------------ |:-----------:|
| séparateur? | chaîne de caractères | Séparateur pour séparer les noms de serveurs renvoyés. |    faux     |

## Exemple(s)

Cela renverra les serveurs dans lesquels votre bot est et le séparera avec une virgule:

```javascript
bot.command({
    name: 'nomServeurs',
    code: `
  $guildNames[, ]
  `
});
```
