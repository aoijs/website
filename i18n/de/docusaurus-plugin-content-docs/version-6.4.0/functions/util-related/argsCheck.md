---
title: '$argsCheck'
description: '$argsCheck prüft die Argumente dessen, was der Benutzer eingegeben hat und die benötigte, falls die Anforderungen nicht erfüllt wurden, wird eine Fehlermeldung zurückgegeben.'
id: argsCheck
---

`$argsCheck` prüft die Argumente des eingegebenen Benutzers und die erforderlichen Argumente, falls die Anforderungen nicht erfüllt wurden, wird eine Fehlermeldung zurückgegeben.

## Verwendung

```php
$argsCheck[condition;errorMessage]
```

## Verwendung

| Feld          | Typ    | Beschreibung                                           | Erforderlich |
| ------------- | ------ | ------------------------------------------------------ |:------------:|
| bedingung     | string | Die Voraussetzung.                                     |     wahr     |
| fehlermeldung | string | Fehlermeldung, wenn die Bedingung nicht erfüllt wurde. |     wahr     |

#### Gültige mathematische Operatoren

| Operator | Mathematischer Ausdruck |
| -------- | ----------------------- |
| ==       | gleich zu               |
| !=       | ungleich wie            |
| <=       | kleiner oder gleich wie |
| \>=     | größer als oder gleich  |
| \>      | größer als              |
| <        | weniger als             |
| \       | \| logisch ODER        |
| &&       | logische Verbindung     |

## Beispiel(e)

Dies gibt zurück: Größere als 2 Argumente, wenn die Bedingung erfüllt ist, sonst wird eine Fehlermeldung zurückgegeben.

```javascript
bot.command({
    name: "argsCheck",
    code: `
  Du hast mehr als zwei Argumente, nice!

  $argsCheck[>2;You have less than two arguments!]
  `
});
```
