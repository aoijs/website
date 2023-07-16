---
title: '$cloneChannel'
description: '$cloneChannel dupliquera un salon.'
id: cloneChannel
---

`$cloneChannel` dupliquera un salon.

## Utilisation

```php
$cloneChannel[IDsalon;nom;renvoyerID?]
```

## Paramètres

| Champ       | Type                 | Description                                              | Obligatoire |
| ----------- | -------------------- | -------------------------------------------------------- |:-----------:|
| IDsalon     | entier               | L'ID du salon à dupliquer.                               |    vrai     |
| nom         | chaine de caractères | Le nouveau nom du salon dupliqué.                        |    vrai     |
| renvoyerID? | booléen              | Si la fonction retourne l'ID du salon nouvellement créé. |    faux     |

**Il ne dupliquera aucun message de ce salon.**

## Exemple(s)

Cela clonera le salon actuel et le nommera "nouveau salon":

```javascript
bot.command({
    name: 'dupliquerSalon',
    code: `
  $cloneChannel[$channelID;nouveau salon;false]
  `
});
```
