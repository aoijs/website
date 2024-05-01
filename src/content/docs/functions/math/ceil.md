---
title: $ceil
description: $ceil rounds the number UP to the nearest integer.
id: ceil
---

`$ceil` rounds the number UP to the nearest integer.

## Usage

```php
$ceil[number]
```

## Parameters

| Field  | Type                                                                                              | Description                         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The number that will be rounded up. |   true   |

## Example(s)

This will round `1.1` up to `2`:

```js
client.command({
    name: "ceil",
    code: `$ceil[1.1]`
});
```
