---
title: $randomString
description: $randomString will generate a random string.
id: randomString
---

`$randomString` will generate a random string.

## Usage

```aoi
$randomString[range;diffExec?]
```

## Parameters

| Field     | Type                                                                                                | Description                           | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------- | :------: |
| range     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Range of the random generated string. |   true   |
| diffExec? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return different results?             |  false   |

## Example(s)

This will return a random [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) of twenty characters:

```javascript
client.command({
    name: "randomString",
    code: `
  $randomString[20]
  `
});
```
