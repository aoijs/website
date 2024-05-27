---
title: $deleteFile
description: $deleteFile will delete a given file.
id: deleteFile
---

`$deleteFile` will delete a given file.

## Usage

```aoi
$deleteFile[path]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| path  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | File path.  |   true   |

## Example(s)

This will delete your `index.js` (don't actually do that):

```javascript
client.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```
