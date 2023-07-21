---
title: '$sendTTS'
description: '$sendTTS enverra un message de synthèse vocale dans un salon donné.'
id: sendTTS
---

`$sendTTS` enverra un message de synthèse vocale dans un salon donné.

## Utilisation

```php
$sendTTS[IDsalon;message;retournerID?]
```

## Paramètres

| Champ        | Type                 | Description                                                                                 | Obligatoire |
| ------------ | -------------------- | ------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon      | entier               | L'ID du salon où le message de synthèse vocale sera envoyé.                                 |    vrai     |
| message      | chaîne de caractères | Le contenu du message TTS.                                                                  |    vrai     |
| retournerID? | booléen              | Renvoyer l'ID du message ?  <br /> 1. **true** <br /> 2. **false** (par défaut) |    Faux     |

## Exemple(s)

Ceci enverra un message TTS dans le canal actuel :

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelID;Bonjour !;false]
  `
});
```