---
title: $replaceTextWithRegex
description: $replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.
id: replaceTextWithRegex
---

`$replaceTextWithRegex` will replace specific segments of text.

## Usage

```aoi
$replaceTextWithRegex[text;reg;flags;newText]
```

## Parameters

| Field   | Type                                                                                              | Description                       | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------------- | :------: |
| text    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to modify.          |   true   |
| reg     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The regex that will be replaced.  |   true   |
| flags   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [Flags](#flags).                  |   true   |
| newText | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will replace `reg`. |  false   |

### Flags

| Flags |                                        |
| :---: | -------------------------------------- |
|   g   | Replace all matches (case-sensitive)   |
|   m   | Multiline matching                     |
|   i   | Replace all matches (case-insensitive) |

## Example(s)

This will replace `more` with `less`:

```javascript
client.command({
    name: "replaceTextWithRegex",
    code: `
  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]
  `
});
```

### Advanced Example

This will replace `less` with `more`:

```javascript
client.command({
    name: "replaceTextWithRegex",
    code: `
  $replaceTextWithRegex[This function is more simple than it looks.;complicated;g;simple]
  `
});
```
