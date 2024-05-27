---
title: $createFile
description: $createFile will create a file attachment.
id: createFile
---

`$createFile` will create a file attachment.

## Usage

```aoi
$createFile[attachment;name]
```

## Parameters

| Field      | Type                                                                                              | Description                 | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------- | :------: |
| attachment | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Content of the file.        |   true   |
| name       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the attachment. |   true   |

## Example(s)

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
client.command({
    name: "createFile",
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
