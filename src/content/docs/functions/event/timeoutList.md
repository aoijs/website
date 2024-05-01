---
title: $timeoutList
description: $timeoutList will return all timeouts present in your database.
id: timeoutList
---

`$timeoutList` will return all timeouts present in your database.

## Usage

```php
$timeoutList[option]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                                                   | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | :------: |
| format?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The format of the timeout keys. <br /> 1. **key** <br /> 2. **duration** <br /> 3. **id** <br /> 4. **{key}** (custom format) |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Timeout Data option name.                                                                                                     |  false   |

## Example(s)

This will return all timeouts in the `key` format:

```javascript
client.command({
    name: "timeoutList",
    code: `
    $timeoutList[key;, ]
    `
});
```

This will return all timeouts in the `key` format:

```javascript
client.command({
    name: "timeoutList",
    code: `
    $timeoutList[{key} {duration}];, ]
    `
});
```
