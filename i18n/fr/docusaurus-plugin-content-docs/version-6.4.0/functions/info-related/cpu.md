---
title: '$cpu'
description: '$cpu retournera l''utilisation CPU d''un processeur ou d''un système d''exploitation.'
id: cpu
---

`$cpu` retournera l'utilisation du processeur d'un processeur ou d'un système d'exploitation.

## Utilisation

```php
$cpu[option?]
```

## Paramètres

| Champ   | Type                 | Description                                                                                                                                                                         | Obligatoire |
| ------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| option? | chaîne de caractères | L'option dont l'utilisation du CPU sera retournée. <br /> 1. **os** - renvoie l'utilisation du CPU du bot <br /> 2. **process** - retourne l'utilisation du processeur. |    Faux     |

## Exemple(s)

Ceci retournera l'utilisation du CPU de votre bot :

```javascript
bot.command({
    name: 'cpu',
    code: `
  OS : $cpu[os] 
  Processeur : $cpu[process] 
  `
});
```