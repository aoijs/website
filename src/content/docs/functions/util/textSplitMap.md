---
title: $textSplitMap
description: $textSplitMap will create a loop over all values that are stored within $textSplit
id: textSplitMap
---

`$textSplitMap` will create a loop over all values that are stored within $textSplit.

## Usage

```php
$textSplit[awaited]
```

## Parameters

| Field   | Type                                                                                              | Description                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | :------: |
| awaited | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the awaited command. |   true   |

## Example(s)

This will return the arguments within `$textSplit` and send all of them separately:

```javascript
client.command({
    name: "textSplitMap",
    code: `
    $textSplitMap[devs]
    $textSplit[Ayaka,Leref,Ferel,Blurr;,]
    `
});

client.awaitedCommand({
    name: "devs",
    code: `
    $message[1]
    `
});
```
