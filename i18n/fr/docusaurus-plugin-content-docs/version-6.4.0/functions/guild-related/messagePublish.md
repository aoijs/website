---
title: '$messagePublish'
description: '$messagePublish publiera un message donné dans un salon d''annonce donné.'
id: messagePublish
---

`$messagePublish` publiera un message donné dans un salon d'annonce donné.

## Utilisation

```php
$messagePublish[IDmessage;IDsalon?]
```

## Paramètres

| Champ     | Type   | Description                                                     | Obligatoire |
| --------- | ------ | --------------------------------------------------------------- |:-----------:|
| IDmessage | entier | L'ID du message qui doit être publié.                           |    vrai     |
| IDsalon?  | entier | L'ID du salon d'annonce dans lequel se trouve le message donné. |    faux     |

## Exemple(s)

Ceci publiera le message "Bonjour!" que le bot aura envoyé  (ne fonctionnera que dans les salons d'annonces):

```javascript
bot.command({
    name: 'publierMessage',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Bonjour!;true]]
  `
});
```
