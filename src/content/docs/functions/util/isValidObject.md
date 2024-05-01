---
title: $isValidObject
description: $isValidObject checks if the given json is a valid object.
id: isValidObject
---

`$isValidObject` checks if the given json is a valid object.

## Usage

```php
$isValidObject[object]
```

## Parameters

| Field  | Type                                                                                              | Description  | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| object | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | JSON object. |   true   |

## Example(s)

This will return `true` as the given object is a valid JSON object:

```javascript
client.command({
    name: "isValidObject",
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
