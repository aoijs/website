---
title: '$deleteWebhook'
description: '$deleteWebhook supprimera le webhook donné.'
id: deleteWebhook
---

`$deleteWebhook` supprimera le webhook donné.

## Utilisation

```php
$deleteWebhook[IDwebhook;tokenWebhook]
```

## Paramètres

| Champ        | Type                 | Description          | Obligatoire |
| ------------ | -------------------- | -------------------- |:-----------:|
| IDwebhook    | entier               | L'ID du webhook.     |     oui     |
| tokenWebhook | chaine de caractères | Le token du webhook. |    true     |

## Exemple(s)

Ceci supprimera un webhook de votre serveur:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[IDwebhook;tokenWebhook]
  ` // remplacez les champs par des informations valides actuellement.
});
```