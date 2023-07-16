---
title: '$advancedTextSplit'
description: '$advancedTextSplit wird mehrere gegebene Argumente aufteilen.'
id: advancedTextSplit
---

`$advancedTextSplit` teilt mehrere vorgegebene Argumente auf.

## Verwendung

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## Verwendung

| Feld  | Typ        | Beschreibung                                              | Erforderlich |
| ----- | ---------- | --------------------------------------------------------- |:------------:|
| text  | string     | Zu teilender Text.                                        |     wahr     |
| sep   | string     | Trennzeichen, der verwendet wird, um die Werte zu teilen. |     wahr     |
| index | ganze Zahl | Die Position des Textes, den Sie zurückgeben möchten.     |     wahr     |

## Beispiel(e)

Dies wird `Hallo` von `Bye` aufteilen und `Hallo` zurückgeben:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
