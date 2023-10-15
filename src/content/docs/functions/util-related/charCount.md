---
title: $charCount
description: $charCount will count the given characters in a text and return the amount of characters.
id: charCount
---

`$charCount` will count the given characters in a text and return the amount of characters.

## Usage

```php
$charCount[text]
```

## Parameters

| Field | Type                                                                                              | Description                                            | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will be the character count returned of. |   true   |

## Example(s)

This will return `77` as there are 77 characters in this text:

```javascript
client.command({
  name: "charCount",
  code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `,
});
```
