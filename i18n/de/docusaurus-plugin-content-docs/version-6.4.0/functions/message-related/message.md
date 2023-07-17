---
title: $message
description: '$message wird die angegebenen Argumente einer Nachricht zurückgeben.'
id: message
---

`$message` wird die angegebenen Argumente einer Nachricht zurückgeben.

## Verwendung

```php
$message[index?]
```

## Verwendung

| Feld   | Typ        | Beschreibung                                                                                              | Erforderlich |
| ------ | ---------- | --------------------------------------------------------------------------------------------------------- |:------------:|
| index? | ganze Zahl | Welches Nachrichtenargument zurückgegeben wird, lassen Sie es leer, um die ganze Nachricht zurückzugeben. |    falsch    |

## Beispiel(e)

Dies gibt die angegebene Nachricht zurück:

```javascript
bot.command({
    name: 'message',
    code: `
  Du sagst: "$message"
  ` // [prefix]Nachricht Hallo!
});
```
