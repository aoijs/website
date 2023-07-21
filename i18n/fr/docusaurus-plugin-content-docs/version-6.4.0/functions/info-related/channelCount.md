---
title: '$channelCount'
description: '$channelCount retournera la quantité de salons d''un type donné.'
id: channelCount
---

`$channelCount` retournera la quantité de salons d'un type donné.

## Utilisation

```php
$channelCount[IDserveur?;type?]
```

## Paramètres

| Champ      | Type                 | Description                                                          | Obligatoire |
| ---------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| IDserveur? | entier               | ID du serveur d'où seront comptabilisés les salons.                  |    Faux     |
| type?      | chaîne de caractères | Type que vous voulez que le montant soit retourné, listé ci-dessous. |    Faux     |

<details>
  <summary><h3> Types de canaux </h3></summary>

| Type de canal               |                    |
| --------------------------- | ------------------ |
| Salon textuel               | Text               |
| Salon vocal                 | Voice              |
| Catégorie                   | Category           |
| Salon de conférence         | Stage              |
| Fil de discussion privé     | PrivateThread      |
| Fil de discussion public    | PublicThread       |
| Forums                      | Forums             |
| Fil de discussion d'annonce | AnnouncementThread |
| Salon d'annonce             | Announcement       |
| Accueil                     | GuildDirectory     |
| Salon NSFW                  | NSFW               |
| Message direct              | DM                 |
| Tous les types de salons    | all                |

</details>

## Exemple(s)

Cela retournera le nombre de salons vocaux dans votre serveur :

```javascript
bot.command({
    name: 'channelCount',
    code: `
  $channelCount[$guildID;Voice]
  `
});
```
