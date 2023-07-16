---
title: '$isStreaming'
description: '$isStreaming wird prüfen, ob ein Benutzer in einem Sprachkanal streamt.'
id: isStreaming
---

`$isStreaming` prüft, ob ein Benutzer in einem Sprachkanal streamen kann.

## Verwendung

```php
$isStreaming[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                        | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers, den du überprüfen möchtest, ob er gestreamt wird. |    falsch    |
| guildID? | ganze Zahl | ID des Kanals, in dem sie streamen                                  |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob du streamen möchtest (Sprachkanal) oder nicht:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
