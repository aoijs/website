---
title: '$getEmbed'
description: '$getEmbed retournera des propriétés à propos d''un embed donné.'
id: getEmbed
---

`$getEmbed` retournera des propriétés à propos d'un embed donné.

## Utilisation

```php
$getEmbed[IDsalon;IDmessage;index;option]
```

## Paramètres

| Champ     | Type                 | Description                                   | Obligatoire |
| --------- | -------------------- | --------------------------------------------- |:-----------:|
| IDsalon   | entier               | ID du salon dans lequel se trouve le message. |    vrai     |
| IDmessage | entier               | L'ID du message qui a un embed.               |    vrai     |
| index     | entier               | L'index de l'embed.                           |    vrai     |
| option    | chaîne de caractères | L'option à récupérer.                         |    vrai     |

<details>
  <summary><h3> Options </h3></summary>

| Type de texte                       | Libellé                             |
| ----------------------------------- | ----------------------------------- |
| title                               | Titre de l'embed.                   |
| description                         | Description de l'embed.             |
| URL                                 | L'URL dans le titre.                |
| color                               | Couleur de l'embed.                 |
| timestamp                           | Timestamp situé dans le footer.     |
| field<index\>.name / field1.name   | Titre du champ.                     |
| field<index\>.value / field1.value | Description du champ.               |
| thumbnail                           | Miniature (image en haut à droite). |
| image                               | Grande image en bas de l'embed.     |
| video                               | Vidéo/GIF.                          |
| author                              | Auteur, au-dessus du titre.         |
| footer                              | Pied de page.                       |
| files                               | Fichiers joints.                    |
| createdAt                           | Date de création de l'embed.        |
| hexColor                            | Couleur hexadécimale de l'embed.    |
| length                              | Longueur de l'embed.                |

</details>

## Exemple(s)

Cela retournera la description d'un embed :

```javascript
bot.command({
    name: 'getEmbed',
    code: `

$getEmbed[$channelID;IDmessage;1;description] 
  ` // assurez-vous de remplacer "IDmessage" par l'ID actuel du message 
});
```
