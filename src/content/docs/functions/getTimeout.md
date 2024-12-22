---
title: $getTimeout
description: $getTimeout returns information about a specific timeout.
id: getTimeout
---

`$getTimeout` returns information about a specific timeout.

## Usage

```aoi
$getTimeout[timeoutId;key?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                                                          | Required |
| --------  | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------| :------: |
| timeoutId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the timeout.                                                                                               |  true    |
| key?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The key value that will be returned. <br /> 1. **key** (default) <br /> 2. **duration** <br /> 3. **id**             |  false   |

## Example(s)

This will return the duration of the specified timeout.

```js
client.command({
    name: "getTimeout",
    code: `
$getTimeout[$get[timeoutID;duration] $comment[Example duration value, 1723905246347]
$let[timeoutID;$setTimeout[timeoutCommand;100s;{};true]]
  `
});
```
