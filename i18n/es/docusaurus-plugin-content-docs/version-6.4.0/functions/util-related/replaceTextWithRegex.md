---
title: '$replaceTextWithRegex'
description: '$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` will replace specific segments of text.

## Uso

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## Parámetros

| Campo   | Tipo   | Descripción                       | Requerido |
| ------- | ------ | --------------------------------- |:---------:|
| text    | string | Text you want to modify.          |    sí     |
| reg     | cadena | The regex that will be replaced.  |    sí     |
| flags   | cadena | [Flags](#flags).                  |    sí     |
| newText | string | The text that will replace `reg`. |    no     |

<details open>
  <summary><h2> Flags </h2></summary>

| Flags |                                        |
|:-----:| -------------------------------------- |
|   g   | Replace all matches (case-sensitive)   |
|   m   | Multiline matching                     |
|   i   | Replace all matches (case-insensitive) |

</details>

## Ejemplo(s)

This will replace `more` with `less`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]
  `
});  
```

### Advanced Example

This will replace `less` with `more`:

```javascript
bot.command({
    name: 'replaceTextWithRegex',
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]
  `
});  
```