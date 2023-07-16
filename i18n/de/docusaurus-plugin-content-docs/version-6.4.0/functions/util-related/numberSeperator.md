---
title: $numberSeperator
description: '$numberSeparator trennt die Zahlen und macht sie lesbar.'
id: numberSeperator
---

`$numberSeparator` trennt die Zahlen und macht sie lesbar.

## Verwendung

```php
$numberSeparator[num;sep?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                                          | Erforderlich |
| ---- | ------ | ------------------------------------------------------------------------------------- |:------------:|
| num  | anzahl | Nummer die Sie trennen möchten.                                                       |     wahr     |
| sep? | string | Trennzeichen, der verwendet wird, um die Zahlen zu trennen, Standardeinstellung: `,`. |    falsch    |

## Beispiel(e)

Dies wird zurückgegeben `1.000.000`:

```javascript
bot.command({
    name: 'numberSeparator',
    code: `
  $numberSeparator[1000000;,]
  `
});
```
