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

| Field    | Type                                                                                              | Description                             | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | :------: |
| path     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Where to create the file.               |   true   |
| text     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What the content of the file should be. |   true   |
| encoding | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text/File encoding.                     |  false   |

## Example(s)

This will create a file called "testing.txt" with the content of "Hello!":

```javascript
client.command({
  name: "writeFile",
  code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```
