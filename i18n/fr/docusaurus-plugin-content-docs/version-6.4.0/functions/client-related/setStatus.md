---
title: '$setStatus'
description: '$setStatus changera le statut du client.'
id: setStatus
---

`$setStatus` changera le statut du client.

## Utilisation

```php
$setStatus[nom;type;statut;URL;afk?]
```

## Paramètres

| Champ  | Type                        | Description                                                                                                                                        | Obligatoire |
| ------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| nom    | chaîne de caractères        | Le contenu du statut.                                                                                                                              |    vrai     |
| type   | champ de caractères, entier | 1. **PLAYING** (par defaut) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |    vrai     |
| statut | chaîne de caractères        | 1. **online** (par defaut) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                          |    vrai     |
| URL    | chaîne de caractères        | URL (statut de streaming)                                                                                                                          |    vrai     |
| afk?   | booléen                     | 1. **true** <br /> 2. **false** (par défaut)                                                                                                 |    vrai     |

## Exemple(s)

Ceci changera le statut du client en **PLAYING** et avec comme statut **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```