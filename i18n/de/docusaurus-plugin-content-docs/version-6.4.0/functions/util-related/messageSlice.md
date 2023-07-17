---
title: $messageSlice
description: '$messageSlice wird eine Nachricht senden.'
id: messageSlice
---

`$messageSlice` wird eine Nachricht versenden.

## Verwendung

```php
$messageSlice[from;to?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                       | Erforderlich |
| ---- | ------ | -------------------------------------------------- |:------------:|
| von  | anzahl | Startpunkt wo die Nachricht zerstreut werden soll. |     wahr     |
| zu?  | anzahl | Endpunkt, an dem das Slicing endet.                |    falsch    |

## Beispiel(e)

Dies wird die Nachricht von der ersten Nachricht bis zur fünften Nachricht trennen:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```
