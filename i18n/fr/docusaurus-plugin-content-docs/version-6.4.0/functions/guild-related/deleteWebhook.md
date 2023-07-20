---
title: '$deleteWebhook'
description: '$deleteWebhook supprimera le webhook donné.'
id: deleteWebhook
---

`$deleteWebhook` supprimera le webhook donné.

## Usage

```php
$deleteWebhook[IDwebhook;tokenWebhook]
```

## Paramètres

| Champ        | Type                 | Description          | Obligatoire |
| ------------ | -------------------- | -------------------- |:-----------:|
| IDwebhook    | entier               | L'ID du webhook.     |    vrai     |
| tokenWebhook | chaîne de caractères | Le token du webhook. |    vrai     |

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