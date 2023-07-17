---
title: '$isThread'
description: '$isThread wird prüfen, ob der angegebene Kanal ein Thread ist oder nicht.'
id: isThread
---

`$isThread` wird überprüfen, ob der angegebene Kanal ein Thread ist oder nicht.

## Verwendung

```php
$isThread[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                               | Erforderlich |
| ---------- | ---------- | ------------------------------------------ |:------------:|
| channelID? | ganze Zahl | ID des Kanals, den du überprüfen möchtest. |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob Sie den Befehl in einem Thread ausführen:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```