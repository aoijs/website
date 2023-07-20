---
title: '$roleName'
description: '$roleName renverra le nom d''un rôle spécifique.'
id: roleName
---

`$roleName` renverra le nom d'un rôle spécifique.

## Utilisation

```php
$roleName[IDrôle;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                             | Obligatoire |
| ---------- | ------ | ------------------------------------------------------- |:-----------:|
| IDrôle     | entier | L'ID du rôle dont vous voulez que le nom soit retourné. |    vrai     |
| IDserveur? | entier | L'ID du serveur.                                        |    Faux     |

## Exemple(s)

Cela retournera le nom du rôle de n'importe quel rôle, dans ce cas, il retournera `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
