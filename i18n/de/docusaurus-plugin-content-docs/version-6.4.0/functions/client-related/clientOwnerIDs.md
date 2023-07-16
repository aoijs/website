---
title: $clientOwnerIDs
description: '$clientOwnerIDs gibt die Benutzer-IDs des Bot-Besitzers zurück (oder mehrerer Personen, wenn Sie ein Team haben).'
id: clientOwnerIDs
---

`$clientOwnerIDs` wird die Benutzer-IDs des Bot-Besitzers (oder mehrerer Personen, wenn Sie ein Team haben) zurückgeben.

## Verwendung

```php
$clientOwnerIDs[separator?]
```

## Parameter

| Feld          | Typ    | Beschreibung                                            | Erforderlich |
| ------------- | ------ | ------------------------------------------------------- |:------------:|
| trennzeichen? | string | Trennzeichen um Benutzer-IDs zu teilen. (Standard: `,`) |    falsch    |

## Beispiel(e)

Dies wird deine Benutzer-ID wahrscheinlich zurückgeben:

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```
