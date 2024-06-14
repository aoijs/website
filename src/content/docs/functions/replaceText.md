---
title: $replaceText
description: $replaceText will replace specific segments of text.
id: replaceText
---

`$replaceText` will replace specific segments of text.

## Usage

```aoi
$replaceText[text;replacer;replaceTo;times?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                  | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | :------: |
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to modify.                                                     |   true   |
| replacer  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will be replaced.                                              |   true   |
| replaceTo | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will replace `replacer`.                                       |   true   |
| times?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | How many times `replaceTo` replaces `replacer`. / Use `-1` for the last one. |  false   |

## Example(s)

This will replace `M` with `D` and the output will be `Donkey`:

```javascript
client.command({
    name: "replaceText",
    code: `
  $replaceText[Monkey;M;D]
  `
});
```

### Advanced Example

This will replace the word `coffee` two times using the last [field](#parameters) of `$replaceText`:

```javascript
client.command({
    name: "replaceText",
    code: `
  $replaceText[I love drinking Coffee, Coffee gives me power! Coffee is bad for my health.;Coffee;orange juice;2]
  `
});
```

This will replace `Ferel` and `are` using multiple `$replaceText`:

```javascript
client.command({
    name: "replaceText",
    code: `
  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are not]
  `
});
```
