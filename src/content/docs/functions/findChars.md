---
title: $findChars
description: $findChars will return all letters or words from the given text.
id: findChars
---

`$findChars` will return all letters or words from the given text.

## Usage

```aoi
$findChars[text]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text.   |   true   |

## Example(s)

This will return "Hello":

```js
client.command({
    name: "findChars",
    code: `$findChars[Hello!123.@#%&]`
});
```
