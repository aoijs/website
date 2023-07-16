---
title: '$isVariableExist'
description: '$isVariableExist prüft, ob eine bestimmte Variable in einer gegebenen Tabelle existiert.'
id: isVariableExist
---

`$isVariableExist` prüft, ob eine bestimmte Variable in einer bestimmten Tabelle existiert.

## Verwendung

```php
$isVariableExist[variable;table?]
```

## Verwendung

| Feld     | Typ    | Beschreibung       | Erforderlich |
| -------- | ------ | ------------------ |:------------:|
| variabel | string | Der Variablenname. |     wahr     |
| Tabelle? | string | Der Tabellenname.  |    falsch    |

## Beispiel(e)

Dies wird entweder wahr oder falsch sein, je nachdem, ob eine Variable namens `Beispiel` existiert:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```
