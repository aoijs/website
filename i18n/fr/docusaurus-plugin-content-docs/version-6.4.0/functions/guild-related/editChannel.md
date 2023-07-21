---
title: '$editChannel'
description: '$editChannel modifiera un salon.'
id: editChannel
---

`$editChannel` modifiera un salon.

## Usage

```php
$editChannel[IDsalon;nom?;type?;position?;sujet?;nsfw?;débit?;limiteUtilisateur?;catégorie?;permissionsBloquées?;permissionEcrasées?;modeLent?;duréeAutoArchiveParDéfaut?;régionRtc?;raison?]
```

## Paramètres

| Champ                     | Type de texte        | Libellé                                              | Requis |
| ------------------------- | -------------------- | ---------------------------------------------------- |:------:|
| ID du canal               | entier               | L'ID du salon qui sera notifié.                      |  vrai  |
| nom?                      | chaîne de caractères | Le nouveau nom du salon.                             |  faux  |
| type?                     | chaîne de caractères | Le nouveau type de salon. (listé ci-dessous)         |  faux  |
| position?                 | chaine de caractères | La nouvelle position du salon.                       |  faux  |
| sujet?                    | chaine de caractères | Le nouveau sujet du salon.                           |  faux  |
| nsfw?                     | booléen              | Si elle doit marquer le salon comme NSFW ou non.     |  faux  |
| débit?                    | entier               | Débit du salon vocal                                 |  faux  |
| limiteUtilisateur?        | nombre               | Limite utilisateur du salon vocal.                   |  faux  |
| categorie?                | entier               | La nouvelle catégorie du salon. (ID de la catégorie) |  faux  |
| permissionsBloquées?      | chaine de caractères | Les nouvelles permissions bloquées du salon.         |  faux  |
| PermissionsEcrasées?      | chaine de caractères | Les nouvelles permissions écrasées du salon.         |  faux  |
| modeLent?                 | nombre               | Le mode ralenti du salon modifié.                    |  faux  |
| DuréeAutoArchiveParDéfaut | nombre               | Durée de l'archive Thread/Forum. (en ms)             |  faux  |
| régionRtc                 | chaine de caractères | Région RTC du salon vocal.                           |  faux  |
| raison?                   | chaine de caractères | Raison qui sera affichée dans les logs du serveur.   |  faux  |

**Remarque : vous pouvez utiliser `$default` pour conserver la propriété actuelle.**

<details>
  <summary><h3> Types de canaux </h3></summary>

| Type de canal    |                |
| ---------------- | -------------- |
| Salon textuel    | Texte du texte |
| Salon vocal      | Voix           |
| Catégorie        | Catégorie      |
| Canal d'Etape    | Étape          |
| Sujet privé      | Sujet privé    |
| Fil public       | PublicThread   |
| Forums           | Forums         |
| Fil d'annonce    | Fil d'annonce  |
| Chaîne d'annonce | Annonce        |

Remarque : tous les types de canaux sont **sensibles à la casse**.

</details>

## Exemple(s)

Cela changera le nom du salon actuel en "jadore-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;jadore-aoijs]
  `
});
```