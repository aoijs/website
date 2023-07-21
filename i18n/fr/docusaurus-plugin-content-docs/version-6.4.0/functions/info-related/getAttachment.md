---
title: '$getAttachment'
description: '$getAttachment renverra les propriétés d''une pièce jointe.'
id: getAttachment
---

`$getAttachment` renverra les propriétés d'une pièce jointe.

## Utilisation

```php
$getAttachment[IDsalon;IDmessage;index?;option?]
```

## Paramètres

| Champ     | Type                 | Description                         | Obligatoire |
| --------- | -------------------- | ----------------------------------- |:-----------:|
| IDsalon   | entier               | Le salon où le message est présent. |    vrai     |
| IDmessage | entier               | L'ID du message.                    |    vrai     |
| index?    | nombre               | Index de la pièce jointe.           |    Faux     |
| option?   | chaîne de caractères | L'option à récupérer.               |    Faux     |