---
title: '$closeTicket'
description: '$closeTicket supprimera un ticket créé par `$newTicket`.'
id: closeTicket
---

`$closeTicket` supprimera un ticket créé par `$newTicket`.

## Utilisation

```php
$closeTicket[erreur?]
```

## Paramètres

| Champ   | Type                 | Description         | Obligatoire |
| ------- | -------------------- | ------------------- |:-----------:|
| erreur? | chaîne de caractères | Erreur à retourner. |    Faux     |

## Exemple(s)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Quelque chose a mal tourné !]
  `
});
```