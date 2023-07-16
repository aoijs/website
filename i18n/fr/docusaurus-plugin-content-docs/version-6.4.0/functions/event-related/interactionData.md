---
title: '$interactionData'
description: '$interactionData retournera les arguments demandés d''une interaction.'
id: interactionData
---

`$interactionData` retournera les arguments demandés d'une interaction.

## Utilisation

```php
$interactionData[donées]
```

## Paramètres

| Champ  | Type                 | Description          | Obligatoire |
| ------ | -------------------- | -------------------- |:-----------:|
| donées | chaîne de caractères | Données à récupérer. |    vrai     |

## Exemple(s)

```php
$interactionData[customId]
// renvoie l'ID personnalisée de l'interaction.
```

```php
$interactionData[author.id]
// renvoie l'ID de l'auteur de l'interaction.
```

```php
$interactionData[message.id]
// renvoie l'ID du message de l'interaction.
```

Ce ne sont là que quelques exemples, il y en a beaucoup plus.