---
title: '$resolveColor'
description: '$resolveColor konvertiert eine bestimmte Farbe in einen bestimmten Typ.'
id: resolveColor
---

`$resolveColor` konvertiert eine bestimmte Farbe in einen bestimmten Typ.

## Verwendung

```php
$resolveColor[type;returnAs?;...data]
```

## Verwendung

| Feld          | Typ    | Beschreibung                              | Erforderlich |
| ------------- | ------ | ----------------------------------------- |:------------:|
| typ           | string | Welcher Typ die Eingabe ist.              |     wahr     |
| zurückkehren? | string | Wie was die Farbe zurückgegeben wird.     |    falsch    |
| ...Daten      | string | Die Daten der RGB oder der Dezimalfarben. |     wahr     |

### Typen

| Typen   |                    | Retouren    |
| ------- | ------------------ | ----------- |
| RGB     | rot, grün, blau    | 50, 168, 82 |
| dezimal | hex-Farbe          | #32a852     |
| anzahl  | hexadezimale Farbe | 80          |

## Beispiel(e)

Wird `#32a852` als `50, 168, 82` zurückgegeben, ist der RGB-Wert:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[rgb;decimal;50;168;82]
  `
});
```

Dies gibt `50, 168, 82` als `#32a852` zurück, ist die Hex-Farbe:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;rgb;#32a852]
  `
});
```

Dies wird `3319890` zurückgeben, da `#32a852` die Hex-Farbe ist:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;number;#32a852]
  `
});
```