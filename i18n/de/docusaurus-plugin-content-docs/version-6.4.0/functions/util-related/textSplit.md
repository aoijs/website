---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## Verwendung

```php
$textSplit[text;sep?]
```

## Verwendung

| Feld | Typ    | Beschreibung                        | Erforderlich |
| ---- | ------ | ----------------------------------- |:------------:|
| text | string | Abfrage von Argumenten.             |     wahr     |
| sep? | string | Trennzeichen für die Textargumente. |    falsch    |

## Beispiel(e)

Dies wird `Hallo, wie bist du` zurückgeben:

```javascript
bot.command({
    name: 'textSplit',
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```