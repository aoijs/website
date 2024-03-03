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

| Field   | Type                                                                                              | Description    | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------- | :------: |
| oldFile | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Old file name. |   true   |
| newFile | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New file name. |   true   |

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
