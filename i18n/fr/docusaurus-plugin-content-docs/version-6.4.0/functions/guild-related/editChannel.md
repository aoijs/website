---
title: $editChannel
description: '$editChannel modifiera un salon.'
id: editChannel
---

`$editChannel` modifiera un salon.

## Utilisation

```php
$editChannel[IDsalon;nom?;type?;position?;sujet?;nsfw?;débit?;limiteUtilisateur?;catégorie?;permissionsBloquées?;permissionEcrasées?;modeRalenti?;autoArchiveDuréeParDéfaut?;regionRtc?;raison?]
```

## Paramètres

| Champ                            | Type                 | Description                                                    | Obligatoire |
| -------------------------------- | -------------------- | -------------------------------------------------------------- |:-----------:|
| IDsalon                          | entier               | L'ID du canal qui sera notifié.                                |    vrai     |
| nom?                             | chaine de caractères | Le nouveau nom du canal.                                       |    faux     |
| type?                            | chaine de caractères | Le nouveau type de canal. (listé ci-dessous)                   |    faux     |
| position?                        | booléen              | La nouvelle position du canal.                                 |    faux     |
| sujet?                           | booléen              | Le nouveau sujet du canal.                                     |    faux     |
| nsfw?                            | booléen              | Si elle doit marquer le canal comme NSFW ou non.               |    faux     |
| débit?                           | entier               | Débit du canal vocal                                           |    faux     |
| limiteUtilisateur?               | nombre               | Limite utilisateur du salon vocal.                             |    faux     |
| categorie?                       | entier               | Le nouveau parent du canal. (ID de la catégorie)               |    faux     |
| Autorisations de verrouillage ?  | booléen              | Les nouvelles autorisations de verrouillage des chaînes.       |    faux     |
| Ecraser les permissions ?        | booléen              | Les nouvelles autorisations de chaînes écrasent.               |    faux     |
| limite de taux par utilisateur ? | nombre               | Le mode ralenti du canal modifié.                              |    faux     |
| defaultAutoArchiveDuration?      | nombre               | Durée de l'archive Thread/Forum. (en ms)                       |    faux     |
| rtcRégion ?                      | booléen              | Région RTC du canal vocal.                                     |    faux     |
| raison?                          | booléen              | Motif qui sera affiché dans les journaux d'audit de la guilde. |    faux     |

**Remarque : vous pouvez utiliser `$default` pour conserver la propriété actuelle.**

<details>
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

Remarque : tous les types de canaux sont **sensibles à la casse**.

</details>

## Exemple(s)

Cela changera le nom du canal actuel en "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```