---
title: '$getGuildInvite'
description: '$getGuildInvite va créer une invitation de serveur.'
id: getGuildInvite
---

`$getGuildInvite` va créer une invitation de serveur.

## Utilisation

```php
$getGuildInvite[IDserveur?;...options?]
```

## Paramètres

| Champ       | Type                 | Description                                       | Obligatoire |
| ----------- | -------------------- | ------------------------------------------------- |:-----------:|
| IDserveur?  | entier               | L'ID du serveur dont l'invitation sera retournée. |    faux     |
| ...options? | chaîne de caractères | Objet d'option d'invitation.                      |    faux     |

<details>
  <summary><h3> Type d'invitations cibles </h3></summary>

| TYPE                 | VALEUR |
| -------------------- | ------ |
| STREAM               | 1      |
| Application EMBEDDED | 2      |

</details>

## Exemple(s)

Cela créera une invitation du vers le salon où la commande a été exécutée:

```javascript
bot.command({
    name: 'créerInvitation',
    code: `
  $getGuildInvite[$guildID]
  `
});
```

### Exemple Avancé

Créer des invitations temporaires avec des utilisations limitées :

```javascript
bot.command({
    name: 'créerInvitation',
    code: `
  $getGuildInvite[$guildID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```
