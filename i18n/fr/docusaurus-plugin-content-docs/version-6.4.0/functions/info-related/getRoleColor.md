---
title: '$getRoleColor'
description: '$getRoleColor retournera la couleur du rôle donné.'
id: getRoleColor
---

`$getRoleColor` renverra la couleur du rôle donné.

## Usage

```php
$getRoleColor[IDrôle;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                                  | Obligatoire |
| ---------- | ------ | ------------------------------------------------------------ |:-----------:|
| IDrôle     | entier | L'ID du rôle dont vous voulez que la couleur soit retournée. |    vrai     |
| IDserveur? | entier | L'ID du serveur dans lequel le rôle existe.                  |    Faux     |

## Exemple(s)

Cela retournera la couleur de votre plus haut rôle :

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$userHighestRole]
  `
});
```