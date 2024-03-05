---
title: $getTextSplitLength
description: $getTextSplitLength will return the amount of split arguments in $textSplit
id: getTextSplitLength
---

`$getTextSplitLength` will return the amount of split arguments in `$textSplit`.

## Usage

```php
$getTextSplitLength
```

## Example(s)

This will return `5` as there are five arguments separated by commas given in `$textSplit`

```javascript
client.command({
  name: "getTextSplitLength",
  code: `
  $getTextSplitLength
  $textSplit[Hello, my, name, is, Leref;, ]
  `
});
```
