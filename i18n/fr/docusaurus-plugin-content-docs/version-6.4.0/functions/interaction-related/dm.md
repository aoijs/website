---
title: '$dm'
description: '$dm enverra un message direct à un utilisateur.'
id: dm
---

`$dm` enverra un message direct à un utilisateur.

## Utilisation

```php
$dm[IDutilisateur]
```

## Paramètres

| Champ         | Type   | Description                      | Obligatoire |
| ------------- | ------ | -------------------------------- |:-----------:|
| IDutilisateur | entier | L'utilisateur qui recevra le DM. |    vrai     |

**Important** :
- Vous ne pouvez pas DM d'autres bots.
- Vous ne pouvez pas DM les personnes qui ont fermé leurs MPs.

## Exemple(s)

Cela vous enverra un MP contenant "Bonjour ! Avez-vous vraiment pensé que cela fonctionne ?" :

```javascript
bot.command({
    name: 'dm',
    code: `
  Bonjour! Avez-vous vraiment pensé que cela fonctionne ?
  $dm[$authorID]
  `
});
```