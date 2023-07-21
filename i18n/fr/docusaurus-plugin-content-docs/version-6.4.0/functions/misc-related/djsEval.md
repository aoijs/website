---
title: '$djsEval'
description: '$djsEval exécutera le code discord.js donné.'
id: djsEval
---

`$djsEval` exécutera le code discord.js donné.

## Utilisation

```php
$djsEval[code;retournerCode?]
```

## Paramètres

| Champ          | Type                 | Description                                                                         | Obligatoire |
| -------------- | -------------------- | ----------------------------------------------------------------------------------- |:-----------:|
| code           | chaîne de caractères | Code Discord.js à exécuter.                                                         |    vrai     |
| retournerCode? | booléen              | Retourner le code ? <br /> 1. **true** <br /> 2. **false** (par défaut) |    Faux     |

## Exemple(s)

Ceci retournera votre identifiant utilisateur :

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```