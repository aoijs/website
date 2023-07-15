---
title: '$createFile'
description: '$createFile will create a file attachment.'
id: createFile
---

`$createFile` will create a file attachment.

## Usage

```php
$createFile[attachment;name]
```

## Parameters

| Field      | Type   | Description                 | Required |
| ---------- | ------ | --------------------------- |:--------:|
| attachment | string | Content of the file.        |   true   |
| name       | string | The name of the attachment. |   true   |

## Example(s)

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
