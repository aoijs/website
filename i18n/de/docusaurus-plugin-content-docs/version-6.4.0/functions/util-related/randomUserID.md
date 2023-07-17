---
title: '$randomUserID'
description: '$randomUserID gibt einen zufälligen Benutzernamen zurück.'
id: randomUserID
---

`$randomUserID` gibt einen zufälligen Benutzernamen zurück.

## Verwendung

```php
$randomUserID[global/guildID?]
```

## Verwendung

| Feld            | Typ    | Beschreibung                                                                                  | Erforderlich |
| --------------- | ------ | --------------------------------------------------------------------------------------------- |:------------:|
| global/guildID? | string | Bringe einen zufälligen Benutzer aus allen Gilden oder nur aus einer bestimmten Gilde zurück. |    falsch    |

## Beispiel(e)

Dies gibt eine zufällige Benutzer-Id zurück:

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
