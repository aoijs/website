---
title: '$getMessage'
description: '$getMessage retournera des propriétés à propos d''un message donné.'
id: getMessage
---

`$getMessage` retournera des propriétés à propos d'un message donné.

## Utilisation

```php
$getMessage[IDsalon;IDmessage;option?]
```

## Paramètres

| Champ     | Type                 | Description                                   | Obligatoire |
| --------- | -------------------- | --------------------------------------------- |:-----------:|
| IDsalon   | entier               | ID du salon dans lequel se trouve le message. |    vrai     |
| IDmessage | entier               | L'ID du message.                              |    vrai     |
| option?   | chaîne de caractères | Quelle option à récupérer.                    |    Faux     |

<details open>
  <summary><h3> Options </h3></summary>

| Type de texte | Libellé                        |
| ------------- | ------------------------------ |
| content       | Contenu du message.            |
| userID        | ID de l'auteur.                |
| usertag       | Discriminateur de l'auteur.    |
| username      | Nom d'utilisateur de l'auteur. |

</details>

## Exemple(s)

Cela retournera le contenu de votre message envoyé :

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```