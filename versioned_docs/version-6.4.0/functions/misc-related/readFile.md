---
title: $readFile
description: $readFile will read a file's content and return it.
id: readFile
---

`$readFile` will read a file's content and return it.

## Usage

```php
$readFile[path]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| path  | string | File path.  |   true   |

## Example(s)

This will return your main file (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```