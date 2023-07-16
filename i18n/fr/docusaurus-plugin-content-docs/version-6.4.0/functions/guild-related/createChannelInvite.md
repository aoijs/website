---
title: '$createChannelInvite'
description: '$createChannelInvite crée une invitation vers un salon spécifique.'
id: createChannelInvite
---

`$createChannelInvite` crée une invitation vers un salon spécifique.

## Utilisation

```php
$createChannelInvite[IDsalon?;...options]
```

## Paramètres

| Champ      | Type   | Description                                | Obligatoire |
| ---------- | ------ | ------------------------------------------ |:-----------:|
| IDsalon?   | entier | L'ID du salon où l'invitation sera créé.   |    faux     |
| ...options | objet  | Options d'invitation. (visible ci-dessous) |    faux     |

<details open>
  <summary><h3> Type d'invitations cibles </h3></summary>

| TYPE                 | VALEUR |
| -------------------- | ------ |
| STREAM               | 1      |
| EMBEDDED_APPLICATION | 2      |

</details>

## Exemple(s)

Cela créera une invitation vers le salon où la commande est exécutée:

```javascript
bot.command({
    name: 'créerInvitation',
    code: `
  $createChannelInvite[$channelID]
  `
});
```

### Exemple(s) Avancé(s)

Créer des invitations temporaires avec un nombre d'utilisations limité :

```javascript
bot.command({
    name: 'créerInvitation',
    code: `
  $createChannelInvite[$channelID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```

Créer des invitations à des activités:

```javascript
bot.command({
    name: 'créerInvitation',
    code: `
  $createChannelInvite[voiceID;{
            "targetApplication": "application ID",
            "targetType": 2
  }]
  `
});
```
