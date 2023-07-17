---
title: '$textTrim'
description: '$textTrim entfernt alle zusätzlichen Leerzeichen, mehrere Leerzeichen nach einem Leerzeichen und ersetzt diese durch ein einziges Leerzeichen.'
id: textTrim
---

`$textTrim` entfernt alle zusätzlichen Leerzeichen, mehrere Leerzeichen nach einem Leerzeichen und ersetzt diese mit einem einzigen Leerzeichen.

## Verwendung

```php
$textTrim[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                       | Erforderlich |
| ---- | ------ | ---------------------------------- |:------------:|
| text | string | Der Text, der gekürzt werden soll. |     wahr     |

## Beispiel(e)

Dies wird alle zusätzlichen Leerzeichen des angegebenen Textes entfernen, in diesem Fall würde es `ein String-Paket zurückgeben.`:

```javascript
bot.command({
    name: "textTrim",
    code: `
    $textTrim[      Imagine a string package      ]
    `
});
```