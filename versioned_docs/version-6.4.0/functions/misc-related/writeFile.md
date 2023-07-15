---
title: $writeFile
description: $writeFile will create a new file in the bot's directory.
id: writeFile
---

`$writeFile` will create a new file in the bot's directory.

## Usage

```php
$writeFile[path;text;encoding?]
```

## Parameters

| Field    | Type   | Description                             | Required |
| -------- | ------ | --------------------------------------- | :------: |
| path     | string | Where to create the file.               |   true   |
| text     | string | What the content of the file should be. |   true   |
| encoding | string | Text/File encoding.                     |  false   |

## Example(s)

This will a file called "testing.txt" with the content of "Hello!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```