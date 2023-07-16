---
title: $mentioned
description: '$mentioned gibt die ID eines Benutzers der Erwähnung zurück.'
id: mentioned
---

`$mentioned` gibt die ID eines Benutzers der Erwähnung zurück.

## Verwendung

```php
$mentioned[index;returnSelf?]
```

## Verwendung

| Feld          | Typ     | Beschreibung                                                            | Erforderlich |
| ------------- | ------- | ----------------------------------------------------------------------- |:------------:|
| index         | anzahl  | Der Index des Arguments.                                                |     wahr     |
| zurückkehren? | boolean | Gibt die ID des Autors zurück, falls der Benutzer nicht gefunden wurde. |    falsch    |

## Beispiel(e)

Dies gibt die ID der **ersten** Erwähnung zurück, wenn Sie versuchen, jemanden in diesem Befehl zu erwähnen, oder sonst wird Ihre ID zurückgegeben:

```javascript
bot.command({
    Name: 'erwähnt',
    Code: `
  $mentioned[1;true]
  `
});
```
