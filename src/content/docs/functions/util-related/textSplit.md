---
title: $textSplit
description: $textSplit
id: textSplit
---

`$textSplit`

## Usage

```php
$textSplit[text;sep?]
```

## Parameters

| Field | Type   | Description                       | Required |
| ----- | ------ | --------------------------------- | :------: |
| text  | string | Query of arguments.               |   true   |
| sep?  | string | Separator for the text arguments. |  false   |

## Example(s)

This will return `hello, how are you`:

```javascript
client.command({
  name: "textSplit",
  code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```
