---
title: '$replaceTextWithRegex'
description: '$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` will replace specific segments of text.

## Використання

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## Параметри

| Поле    | Тип   | Опис                              | Обов'язковий |
| ------- | ----- | --------------------------------- |:------------:|
| text    | рядок | Text you want to modify.          |     так      |
| reg     | рядок | The regex that will be replaced.  |     так      |
| flags   | рядок | [Flags](#flags).                  |     так      |
| newText | рядок | The text that will replace `reg`. |      ні      |

<details open>
  <summary><h2> Flags </h2></summary>

| Flags |                                        |
|:-----:| -------------------------------------- |
|   g   | Replace all matches (case-sensitive)   |
|   m   | Multiline matching                     |
|   i   | Replace all matches (case-insensitive) |

</details>

## Приклад(и)

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