---
title: $checkCondition
description: '$checkCondition prüft, ob eine Bedingung wahr oder falsch ist.'
id: checkCondition
---

`$checkCondition` prüft, ob eine Bedingung wahr oder falsch ist.

## Verwendung

```php
$checkCondition[condition]
```

## Verwendung

| Feld      | Typ    | Beschreibung                           | Erforderlich |
| --------- | ------ | -------------------------------------- |:------------:|
| bedingung | string | Bedingung, die Sie überprüfen möchten. |     wahr     |

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

Dies gibt `false` zurück, da `50` größer ist als `25`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25]
  `
});
```

### Erweitertes Beispiel

#### Logische Verbindung

Dies wird `true` als `50` ist größer als `25` und `120` ist kleiner als `280`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25&&120<280]
  `
});
```

#### Logisch ODER

Dies liefert `true` als eines der beiden Argumente (`50>25`) sind `true`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25||true==false]
  `
});
```
