---
title: $truncate
description: '$truncate entfernt alle Werte nach einem Dezimalpunkt.'
id: truncate
---

`$truncate` wird alle Werte nach einem Dezimalpunkt entfernen.

## Verwendung

```php
$truncate[number]
```

## Verwendung

| Feld   | Typ    | Beschreibung       | Erforderlich |
| ------ | ------ | ------------------ |:------------:|
| anzahl | anzahl | Nummer zum Kürzen. |     wahr     |

## Beispiel(e)

Dies gibt `775` zurück und entfernt `.9723` vom angegebenen Wert:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```