---
title: $deleteFile
description: $deleteFile will delete a given file.
id: deleteFile
---

`$deleteFile` will delete a given file.

## Usage

```php
$deleteFile[path]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| path  | string | File path.  |   true   |

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
