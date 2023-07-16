---
title: '$oldMember'
description: '$oldMember conserve les données pour le membre avant sa mise à jour, ceci provient du cache de discord et peut être vide selon qu''il est mis en cache, donc utilisez une option partielle avant d''essayer d''accéder à n''importe quelle propriété. (évènement memberUpdate)'
id: oldMember
---

`$oldMember` conserve les données pour le membre avant sa mise à jour, ceci provient du cache de discord et peut être vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'accéder à n'importe quelle propriété. (évènement memberUpdate)

## Utilisation

```php
$oldMember[option]
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
| nick          | chaîne de caractères | Renvoie le surnom de l'utilisateur.               |
| highestRoleID | entier               | Retourne l'ID du plus haut rôle de l'utilisateur. |


## Exemple(s)
- **Note : vous avez besoin de l'intention `GuildMembers`.**

```js
bot.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] a mis à jour son surnom !
- Nouveau surnom : $newMember[nick]
 - Ancien surnom : $oldMember[nick]

   $username[$newMember[id]] a mis à jour son nom !
- Nouveau nom : $newMember[name]
 - Ancien nom : $oldMember[name].`
})
```
- Ce code sera exécuté lorsque __un membre met à jour son surnom de serveur ou son nom d'utilisateur discord__.

---