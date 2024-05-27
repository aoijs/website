---
title: $stopTimeout
description: $stopTimeout will end/stop a timeout created by $setTimeout.
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## Usage

```aoi
$stopTimeout[id]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| id    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Timeout ID. |   true   |

## Example(s)

This will end a `$setTimeout` timeout:

```javascript
client.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```
