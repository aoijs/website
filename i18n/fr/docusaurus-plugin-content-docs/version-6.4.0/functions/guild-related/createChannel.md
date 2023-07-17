---
title: '$createChannel'
description: '$createChannel créera un salon du type donné.'
id: createChannel
---

`$createChannel` créera un salon du type donné.

## Utilisation

```php
$createChannel[IDserveur;nom;type;renvoyerID;IDcatégorie]
```

## Paramètres

| Champ       | Type                 | Description                                                                                              | Obligatoire |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur   | entier               | ID du serveur où le salon sera créé.                                                                     |    vrai     |
| nom         | chaine de caractères | Le nom du salon nouvellement créé.                                                                       |    vrai     |
| type        | chaine de caractères | Le type de salon. (listé ci-dessous)                                                                     |    vrai     |
| renvoyerID  | booléen              | Renvoie l'ID du salon nouvellement créé. <br /> 1. **true** <br /> 2. **false** (par défaut) |    vrai     |
| IDcatégorie | entier               | L'ID de la catégorie.                                                                                    |    faux     |

<details open>
  <summary><h3> Types de salon </h3></summary>

| Type de salon            |                    |
| ------------------------ | ------------------ |
| Salon Textuel            | Text               |
| Salon vocal              | Voice              |
| Catégorie                | Category           |
| Salon de conférence      | Stage              |
| Fil de discussion privé  | PrivateThread      |
| Fil de discussion public | PublicThread       |
| Forum                    | Forum              |
| Fil d'annonce            | AnnouncementThread |
| Salon d'Annonce          | Announcement       |

</details>

## Exemple(s)

Cela va créer un nouveau salon textuel appelé "aoijs":

```javascript
bot.command({
    name: 'créerSalon',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
