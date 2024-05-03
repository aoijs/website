---
title: $findNumbers
description: $findNumbers will attempt to return all numbers in a message of a given text.
id: findNumbers
---

`$findNumbers` will attempt to return all numbers in a message of a given text.

## Usage

```php
$findNumbers[text]
```

## Parameters

| Field | Type                                                                                              | Description                          | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text where you want to find numbers. |   true   |

## Example(s)

This will return `25` and remove `Hello, I'm [..] years old` from the given text:

```javascript
client.command({
    name: "findNumbers",
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
