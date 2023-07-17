---
title: '$isVoice'
description: '$isVoice wird prüfen, ob der angegebene Kanal ein Sprachkanal ist oder nicht.'
id: isVoice
---

`$isVoice` wird überprüfen, ob der angegebene Kanal ein Sprachkanal ist oder nicht.

## Verwendung

```php
$isVoice[channelID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                        | Erforderlich |
| --------- | ---------- | ----------------------------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | ID des Kanals, den du überprüfen möchtest, ob es sich um einen Sprachkanal handelt. |     wahr     |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, was Sie als Argument verwenden:

```javascript
bot.command({
    name: 'isVoice',
    code: `
  $isVoice[$channelID]
  `
});
```