---
title: $splitText
description: $splitText will return a value of $textSplit depending on the given index.
id: splitText
---

`$splitText` will return a value of $textSplit depending on the given index.

## Usage

```php
$splitText[index]
```

## Parameters

| Field | Type    | Description                    | Required |
| ----- | ------- | ------------------------------ | :------: |
| index | integer | Index of `$textSplit` content. |   true   |

## Example(s)

This will return `aoi.js` as it's the second argument of `$textSplit`:

```javascript
bot.command({
  name: "splitText",
  code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `,
});
```
