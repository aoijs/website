---
title: $toLocaleUpperCase
description: '$toLocaleUpperCase ändert das erste Zeichen jedes Wortes in Großbuchstaben.'
id: toLocaleUpperCase
---

`$toLocaleUpperCase` ändert das erste Zeichen jedes Wortes in Großbuchstaben.

## Verwendung

```php
$toLocaleUpperCase[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                                   | Erforderlich |
| ---- | ------ | ---------------------------------------------- |:------------:|
| text | string | Der zu ändernde Text in locale Großbuchstaben. |     wahr     |

## Beispiel(e)

Dies wird jedes erste Zeichen eines Wortes in Großbuchstaben ändern, in diesem Fall würde es `Hallo, ich bin glücklich.`:

```javascript
bot.command({
    Name: "toLocaleUpperCase",
    Code: `
    $toLocaleUpperCase[hello, i'm happy.]
    `
});
```