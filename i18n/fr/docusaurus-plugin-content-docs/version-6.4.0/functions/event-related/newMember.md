---
title: '$newMember'
description: '$newMember conserve les données pour le membre après la mise à jour, peut être une bonne idée de cocher l''option partielle avant d''accéder à n''importe quelle propriété. (évènement memberUpdate)'
id: newMember
---

`$newMember` conserve les données pour le membre après la mise à jour, peut être une bonne idée de cocher l'option partielle avant d'accéder à n'importe quelle propriété. (évènement memberUpdate)

## Utilisation

```php
$newMember[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |

### Options

| Champ         | Type                 | Description                                       |
| ------------- | -------------------- | ------------------------------------------------- |
| id            | entier               | Retourne l'ID de l'utilisateur.                   |
| name          | chaine de caractères | Renvoie le nom de l'utilisateur.                  |
| roles         | chaîne de caractères | Retourne les rôles de l'utilisateur.              |
| permissions   | chaine de caractères | Retourne les permissions de l'utilisateur.        |
| nick          | chaîne de caractères | Renvoie le pseudo de l'utilisateur.               |
| highestRoleID | entier               | Retourne l'ID du plus haut rôle de l'utilisateur. |

## Exemple(s)
- **Note : vous avez besoin de l'intention `GuildMembers`.**

```js
bot.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] a mis à jour son surnom !
- Nouveau pseudo : $newMember[nick]
 - Ancien nom : $oldMember[nick]

   $username[$newMember[id]] a mis à jour son nom !
- Nouveau nom : $newMember[name]
 - Ancien nom : $oldMember[name].`
})
```
- Ce code sera exécuté lorsque __un membre met à jour son surnom de serveur ou son nom d'utilisateur discord__.

---