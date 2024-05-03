---
title: $randomShuffle
description: $randomShuffle shuffles an array randomly.
id: randomShuffle
---

`$randomShuffle` shuffles an array randomly.

## Usage

```php
$randomShuffle[...text]
```

## Parameters

| Field   | Type                                                                                              | Description           | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------- | :------: |
| ...text | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The words to shuffle. |   true   |

## Example(s)

This will shuffle the given words (this works similar to randomText, but is ALWAYS random no matter what):

```js
client.command({
    name: "randomShuffle",
    code: `
$randomShuffle[aoi.js;aoi.db;aoi.music]
`
});
```
