---
title: '$interactionDeferUpdate'
description: '$interactionDeferUpdate reporte le message d''interaction qui sera mis à jour.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` reporte le message d'interaction qui sera mis à jour.

## Utilisation

```php
$interactionDeferUpdate[éphémère]
```

## Paramètres

| Champ    | Type    | Description                                      | Obligatoire |
| -------- | ------- | ------------------------------------------------ |:-----------:|
| éphémère | booléen | Visible uniquement par l'auteur de la commande ? |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: ` 
   $interactionFollowUp[ceci est le premier message!]
   $interactionEdit[Ceci est le second message !]
   $interactionDeferUpdate[true]`
});
```