---
title: $discriminator
description: '$discriminator wird den Diskriminator eines Benutzers zurückgeben.'
id: discriminator
---

`$discriminator` gibt den Diskriminator eines Benutzers zurück.

## Verwendung

```php
$discriminator[userId?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                               | Erforderlich |
| ------- | ---------- | -------------------------------------------------------------------------- | ------------ |
| userId? | ganze Zahl | Die ID des Benutzers, von dem der Diskriminator zurückgegeben werden soll. | falsch       |

## Beispiel(e)

Hiermit wird dein Discord Benutzer Diskriminator zurückgegeben, zum Beispiel `User#0000` (die vier Ziffern):

```javascript
bot.command({
    name: 'discriminator',
    code: `
  $discriminator[$authorID] // dein Diskriminator
  $discriminator[$clientID] // der Diskriminator des Bots
  `
});
```