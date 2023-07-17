---
title: '$onlyClientPerms'
description: '$onlyClientPerms vérifiera si le bot a les autorisations requises et renverra un message d''erreur si ce n''est pas le cas.'
id: onlyClientPerms
---

$onlyClientPerms vérifiera si le bot a les autorisations requises et renverra un message d'erreur si ce n'est pas le cas.

## Utilisation

```php
$onlyClientPerms[...permissions;erreur]
```

## Paramètres

| Champ          | Type                | Description                                                        | Obligatoire |
| -------------- | ------------------- | ------------------------------------------------------------------ |:-----------:|
| ...permissions | chaîne de caractère | Permissions dont le bot a besoin.                                  |    vrai     |
| erreur         | chaîne de caractère | Erreur à retourner lorsque le bot n'a pas les permissions listées. |    vrai     |

Vous pouvez toutes les permissions __[ici](../../guides/Client/2permissionsintents.md)__.

## Exemple(s)

La commande ne fonctionnera que si le bot dispose des permissions administrateur :

```javascript
bot.command({
    name: "onlyClientPerms",
    code: `
    Ok.
    $onlyClientPerms[administrator;Je n'ai pas les permissions administrateurs!]
    `
});
```
