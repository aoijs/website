---
title: $readFile
description: $readFile will read a file's content and return it.
id: readFile
---

`$readFile` will read a file's content and return it.

## Usage

```aoi
$readFile[path]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| path  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | File path.  |   true   |

## Example(s)

This will return your main file (index.js):

```javascript
client.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```
