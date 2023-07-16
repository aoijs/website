---
title: '$findUser'
description: '$findUser wird versuchen, einen Benutzer zu finden, der mit der angegebenen Abfrage übereinstimmt.'
id: findUser
---

`$findUser` wird versuchen, einen Benutzer zu finden, der mit der angegebenen Abfrage übereinstimmt.

## Verwendung

```php
$findUser[userResolver;returnSelf?]
```

## Verwendung

| Feld          | Typ     | Beschreibung                                                                                                      | Erforderlich |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |:------------:|
| userResolver  | string  | Abfrage, welche verwendet wird, um den Benutzer zu finden.                                                        |     wahr     |
| zurückkehren? | boolean | Gibt die Benutzer-ID des Benutzers zurück, der den Befehl ausgeführt hat, wenn der Benutzer nicht gefunden wurde. |    falsch    |

## Beispiel(e)

Dies wird nach einem Benutzer namens Ferel suchen, wenn er nicht den Benutzer findet, dann wird er die Benutzer-ID des Befehlsautors zurückgeben:

```javascript
bot.command({
    name: 'findUser',
    code: `
  $findUser[Ferel;true]
  `
});
```
