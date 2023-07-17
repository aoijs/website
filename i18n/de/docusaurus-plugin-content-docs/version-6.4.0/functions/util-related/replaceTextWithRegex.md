---
title: $replaceTextWithRegex
description: '$replaceTextWithRegex wird bestimmte Regex in einem Text ersetzen. Das funktioniert ähnlich wie $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` wird bestimmte Textsegmente ersetzen.

## Verwendung

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                 | Erforderlich |
| ------- | ------ | -------------------------------------------- |:------------:|
| text    | string | Text, den Sie ändern möchten.                |     wahr     |
| reg     | string | Der Regex, der ersetzt wird.                 |     wahr     |
| Flaggen | string | [Flags](#flags).                             |     wahr     |
| newText | string | Der Text, der `ersetzen wird <code> reg`. |    falsch    |

<details open>
  <summary><h2> Flags </h2></summary>

| Flaggen |                                                  |
|:-------:| ------------------------------------------------ |
|    g    | Ersetze alle Treffer (Groß- und Kleinschreibung) |
|    m    | Mehrzeilige Übereinstimmung                      |
|    i    | Ersetze alle Treffer (Groß- und Kleinschreibung) |

</details>

## Beispiel(e)

Dies ersetzt `mehr` durch `weniger`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]
  `
});  
```

### Erweitertes Beispiel

Dies ersetzt `less` durch `mehr`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]
  `
});  
```