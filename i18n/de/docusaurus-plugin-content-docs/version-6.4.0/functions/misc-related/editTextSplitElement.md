---
title: $editTextSplitElement
description: '$editTextSplitElement wird ein spezifisches Textteilelement bearbeiten.'
id: editTextSplitElement
---

`$editTextSplitElement` wird ein spezifisches Textteilelement bearbeiten.

## Verwendung

```php
$editTextSplitElement[index;text]
```

## Verwendung

| Feld  | Typ    | Beschreibung                    | Erforderlich |
| ----- | ------ | ------------------------------- |:------------:|
| index | string | Index des Textteilungselements. |     wahr     |
| text  | string | Neues Text-Teil-Element.        |     wahr     |

## Beispiel(e)

Dies wird das 3. Text-Split-Element bearbeiten und in "Goodbye" ändern:

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```