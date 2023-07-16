---
title: '$allChannelsCount'
description: '$allChannelsCount retournera la quantité de tous les salons mis en cache d''un type donné.'
id: allChannelsCount
---

`$allChannelsCount` retournera la quantité de tous les salons mis en cache d'un type donné.

## Utilisation

```php
$allChannelsCount[type?]
```

## Paramètres

| Champ | Type                 | Description                                        | Obligatoire |
| ----- | -------------------- | -------------------------------------------------- | ----------- |
| type? | chaîne de caractères | Type que vous voulez que le montant soit retourné. | faux        |

<details open>
  <summary><h3> Types de salon </h3></summary>

| Type de salon               |                    |
| --------------------------- | ------------------ |
| Salon Textuel               | Text               |
| Salon vocal                 | Voice              |
| Catégorie                   | Category           |
| Salon de conférence         | Stage              |
| Fil de discussion privé     | PrivateThread      |
| Fil de discussion public    | PublicThread       |
| Forum                       | Forum              |
| Fil de discussion d'annonce | AnnouncementThread |
| Salon d'Annonce             | Announcement       |
| Accueil                     | GuildDirectory     |
| Salon NSFW                  | NSFW               |
| Message direct              | DM                 |
| Tous les types de salons    | all                |

</details>

## Exemple(s)

Cela retournera le nombre de salons vocaux dans votre serveur :

```javascript
bot.command({
    name: 'allChannelsCount',
    code: `
  $allChannelsCount[Voice]
  `
});
```
