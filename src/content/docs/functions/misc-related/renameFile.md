---
title: $renameFile
description: $renameFile will rename a file of your bot's directory.
id: renameFile
---

`$renameFile` will rename a file of your bot's directory.

## Usage

```php
$renameFile[oldFile;newFile]
```

## Parameters

| Field   | Type   | Description    | Required |
| ------- | ------ | -------------- | :------: |
| oldFile | string | Old file name. |   true   |
| newFile | string | New file name. |   true   |

## Example(s)

This will change your index.js to a index.txt file:

```javascript
client.command({
  name: "renameFile",
  code: `
    $renameFile[./index.js;./index.txt]
    `
});
```
