---
title: $onlyIf
description: $onlyIf will check for a condition and return a error message if that condition does not match.
id: onlyIf
---

`$onlyIf` will check for a condition and return a error message if that condition does not match.

## Usage

```aoi
$onlyIf[condition;error]
```

## Parameters

| Field     | Type                                                                                              | Description                                    | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------- | :------: |
| condition | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Condition to check.                            |   true   |
| error     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return when condition does not match. |  false   |

## Example(s)

This will return the error message as 5 does not equal to 3:

```javascript
client.command({
    name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```
