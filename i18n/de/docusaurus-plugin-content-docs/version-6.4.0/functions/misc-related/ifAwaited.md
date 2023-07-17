---
title: '$ifAwaited'
description: '$ifAwaited wird eine Bedingung überprüfen und einen erwarteten Befehl ausführen, abhängig davon, ob die Bedingung wahr oder falsch ist.'
id: ifAwaited
---

`$ifAwaited` wird eine Bedingung überprüfen und einen erwarteten Befehl ausführen, abhängig davon, ob die Bedingung wahr oder falsch ist.

## Verwendung

```php
$ifAwaited[condition;true;false?]
```

## Verwendung

| Feld      | Typ    | Beschreibung                               | Erforderlich |
| --------- | ------ | ------------------------------------------ |:------------:|
| bedingung | string | Bedingung zum Überprüfen                   |     wahr     |
| wahr      | string | Was zu tun, wenn die Bedingung wahr ist.   |     wahr     |
| falsch?   | string | Was zu tun, wenn die Bedingung falsch ist. |    falsch    |

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

Dies wird den `erwarteten Befehl` ausführen, da die Anweisung stimmt:

```javascript
bot.command({
    Name: "ifAwaited",
    Code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `
});

Bot. waitedCommand({
    Name: "awaitedCommand",
    Code: `
    $sendMessage[That's true!;false]
    `
});
```