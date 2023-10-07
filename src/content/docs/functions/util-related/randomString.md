---
title: $randomString
description: $randomString will generate a random string.
id: randomString
---

`$randomString` will generate a random string.

## Usage

```php
$randomString[range;diffExec?]
```

## Parameters

| Field     | Type    | Description                           | Required |
| --------- | ------- | ------------------------------------- | :------: |
| range     | number  | Range of the random generated string. |   true   |
| diffExec? | boolean |                                       |  false   |

## Example(s)

This will return a random string of twenty characters:

```javascript
client.command({
  name: "randomString",
  code: `
  $randomString[20]
  `
});
```
