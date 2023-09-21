---
title: $onlyNSFW
description: $onlyNSFW will check if the command was executed in a NSFW channel and return a error message if not.
id: onlyNSFW
---

`$onlyNSFW` will check if the command was executed in a NSFW channel and return a error message if not.

## Usage

```php
$onlyNSFW[error?]
```

## Parameters

| Field | Type   | Description                                                          | Required |
| ----- | ------ | -------------------------------------------------------------------- | :------: |
| error | string | Error to return when the command was not executed in a NSFW channel. |   true   |

## Example(s)

This will limit the command only to NSFW channels:

```javascript
client.command({
  name: "onlyNSFW",
  code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `,
});
```
