---
title: $expandNumber
description: '$expandNumber wird eine beliebige Nummer erweitern.'
id: expandNumber
---

`$expandNumber` wird eine beliebige Nummer erweitern.

## Verwendung

```php
$expandNumber[abbrNumber]
```

## Verwendung

| Feld       | Typ    | Beschreibung                      | Erforderlich |
| ---------- | ------ | --------------------------------- |:------------:|
| abbrNumber | string | Nummer die Sie erweitern möchten. |     wahr     |

## Beispiel(e)

Dies wird zurückgegeben `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
