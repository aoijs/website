---
title: '$uptime'
description: '$uptime renvoie le temps de fonctionnement du bot.'
id: uptime
---

`$uptime` renvoie le temps de fonctionnement du bot.

## Utilisation

```php
$uptime[option?]
```

## Paramètres

| Champ   | Type                 | Description                                                          | Obligatoire |
| ------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| option? | chaîne de caractères | Comment le temps de fonctionnement sera retourné (listé ci-dessous). |    Faux     |

| Option                | Sortie                 |
| --------------------- | ---------------------- |
| full **(par défaut)** | 19 minutes, 21 seconds |
| humanize              | 19m 21s                |
| ms                    | 1165980                |

## Exemple(s)

Cela retournera le temps de la durée de connexion de votre bot :

```javascript
bot.command({
    name: 'uptime',
    code: `
  Je suis en ligne depuis $uptime[full] !
  `
});
```
