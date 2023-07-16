---
title: $random
description: '$random wird eine zufällige Zahl zwischen dem gewählten Zeitraum erzeugen.'
id: random
---

`$random` generiert eine zufällige Zahl zwischen dem gewählten Umfang.

## Verwendung

```php
$random[num1;num2;allow?;random?]
```

## Verwendung

| Feld                           | Typ     | Beschreibung                               | Erforderlich |
| ------------------------------ | ------- | ------------------------------------------ |:------------:|
| num1                           | anzahl  | Beginn des Zeitraums.                      |     wahr     |
| num2                           | anzahl  | Ende des Zeitraums.                        |     wahr     |
| erlauben?                      | boolean | Ermöglicht die Rückgabe von Dezimalzahlen. |    falsch    |
| [zufällig?](#advanced-Example) | boolean | Wenn die zurückgegebene Zahl zufällig ist. |    falsch    |

## Beispiel(e)

Dies gibt eine zufällige Zahl zwischen `20` und `250` zurück:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[20;250]
  `
});
```

### Erweitertes Beispiel

Dies gibt eine zufällige Dezimalzahl zwischen `25` und `50` zurück:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[25;50;true]  
  `
});
```

Dies gibt eine zufällige Zahl zwischen `45` und `64` zurück und die zweite `$random` wird ebenfalls zufällig sein:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[45;65;false;true]
  $random[45;65;false;true]
  `
});
```
