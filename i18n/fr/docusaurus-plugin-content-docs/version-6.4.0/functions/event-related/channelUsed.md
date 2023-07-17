---
title: '$channelUsed'
description: '$channelUsed retournera l''ID du salon où l''événement a été déclenché.'
id: channelUsed
---

`$channelUsed` retournera l'ID du salon où l'événement a été déclenché.

## Utilisation

```php
$channelUsed
```

## Exemple(s)

Cela va retourner le salon dans lequel un message a été supprimé:

**Vous avez besoin de `onMessageDelete` dans votre fichier principal pour utiliser cet exemple!**

```javascript
bot.deletedCommand({
    channel: "channelID",
    code: `$userTag a supprimé un message dans <#$channelUsed>!`
});
```
