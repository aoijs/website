---
title: $onlyNSFW
description: $onlyNSFW will check if the command was executed in a NSFW channel and return a error message if not.
id: onlyNSFW
---

`$onlyNSFW` will check if the command was executed in a NSFW channel and return a error message if not.

## Usage

```aoi
$onlyNSFW[error?]
```

## Parameters

| Field | Type                                                                                              | Description                                                          | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | :------: |
| error | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return when the command was not executed in a NSFW channel. |   true   |

## Example(s)

This will limit the command only to NSFW channels:

```javascript
client.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```
