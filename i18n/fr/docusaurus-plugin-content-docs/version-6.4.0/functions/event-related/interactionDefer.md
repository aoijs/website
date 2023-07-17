---
title: '$interactionDefer'
description: '$interactionDefer reporte une interaction des 15 dernières minutes.'
id: interactionDefer
---

`$interactionDefer` reporte une interaction des 15 dernières minutes.

## Utilisation

```php
$interactionDefer[éphémère]
```

## Paramètres

| Champ    | Type    | Description                                      | Obligatoire |
| -------- | ------- | ------------------------------------------------ |:-----------:|
| éphémère | booléen | Visible uniquement par l'auteur de la commande ? |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name : 'exempleButton',
    type: 'interaction',
    prototype: 'button',
    code: `
   $interactionFollowUp[Ceci est le second message!] 
   $interactionFollowUp[Ceci est le premier message!] 
   $interactionDefer[true]`
});
```