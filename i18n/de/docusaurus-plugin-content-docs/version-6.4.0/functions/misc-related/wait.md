---
title: $wait
description: '$wait verzögert die Ausführung von Funktionen für eine bestimmte Zeit.'
id: wait
---

`$wait` verzögert die Ausführung von Funktionen für eine bestimmte Zeit.

## Verwendung

```php
$wait[time]
```

## Verwendung

| Feld | Typ            | Beschreibung                                    | Erforderlich |
| ---- | -------------- | ----------------------------------------------- |:------------:|
| Zeit | string, Nummer | Wie lange die Ausführung verzögert werden soll. |     wahr     |

## Beispiel(e)

Dies wird eine Einbettung verzögert:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```