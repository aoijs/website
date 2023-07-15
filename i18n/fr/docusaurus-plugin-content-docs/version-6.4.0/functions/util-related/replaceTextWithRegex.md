---
title: '$replaceTextWithRegex'
description: '$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.'
id: replaceTextWithRegex
---

`$replaceTextWithRegex` will replace specific segments of text.

## Usage

```php
$replaceTextWithRegex[text;reg;flags;newText]
```

## Parameters

| Field   | Type   | Description                       | Required |
| ------- | ------ | --------------------------------- |:--------:|
| text    | string | Text you want to modify.          |   true   |
| reg     | string | The regex that will be replaced.  |   true   |
| flags   | string | [Flags](#flags).                  |   true   |
| newText | string | The text that will replace `reg`. |  false   |

<details open>
  <summary><h2> Flags </h2></summary>

| Flags |                                        |
|:-----:| -------------------------------------- |
|   g   | Replace all matches (case-sensitive)   |
|   m   | Multiline matching                     |
|   i   | Replace all matches (case-insensitive) |

</details>

## Example(s)

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