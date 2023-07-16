---
title: '$bulk'
description: '$bulk conservera les données de la commande de suppression massive. (évènement messageDeleteBulk)'
id: bulk
---

`$bulk` conservera les données de la commande de suppression massive. (évènement messageDeleteBulk)

## Utilisation

```php
$bulk[option]
```

## Paramètres

| Champ  | Type                 | Description                                                                                                                                                                                                                                                                                                                                                       | Obligatoire |
| ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. <br /> 1. **messages** <br /> 2. **ids** <br /> 3. **createdTimestamp** <br /> 4. **createdAt** <br /> 5. **userIds** <br /> 6. **usernames**  <br /> 7. **userMentions** <br /> 8. **guildID** <br /> 9. **guildName** <br /> 10. **channelID** <br /> 11. **channelName** |    vrai     |