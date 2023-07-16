---
title: '$handleError'
description: '$handleError renvoie des informations sur l''erreur qui s''est produite.'
id: handleError
---

`$handleError` renvoie des informations sur l'erreur qui s'est produite.

## Utilisation

```php
$handleError[option]
```

## Paramètres

| Champ  | Type                 | Description                                                                                                                                                                                      | Obligatoire |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:-----------:|
| option | chaîne de caractères | Quelles données doivent être renvoyées. <br /> 1. **function** - nom de la fonction <br /> 2. **command** - nom de la commande <br /> 3. **error** - erreur qui s'est produite |    vrai     |

## Exemple(s)

**Vous avez besoin de `events: ["onFunctionError"]` dans votre fichier principal pour utiliser cette fonction !**

```javascript
bot.functionErrorCommand({
    channel: "channelID (optional)",
    code: `Quelque chose a mal tourné dans votre commande "$handleError[command]" ! La fonction "$handleError[function]" a renvoyé l'erreur "$handleError[error]"!`
});
```
