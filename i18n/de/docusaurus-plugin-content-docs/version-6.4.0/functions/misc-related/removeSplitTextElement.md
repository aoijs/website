---
title: $removeSplitTextElement
description: '$removeSplitTextElement wird ein spezifisches Splittext-Element entfernen.'
id: removeSplitTextElement
---

`$removeSplitTextElement` wird ein spezifisches Split-Text-Element entfernen.

## Verwendung

```php
$removeSplitTextElement[...elements]
```

## Verwendung

| Feld        | Typ    | Beschreibung                         | Erforderlich |
| ----------- | ------ | ------------------------------------ |:------------:|
| ...elemente | string | Zu löschende Textelemente aufteilen. |     wahr     |

## Beispiel(e)

Dadurch wird das Wort "bye" aus dem Array entfernt:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```