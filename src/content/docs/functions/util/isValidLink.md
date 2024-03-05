---
title: $isValidLink
description: $isValidLink will check if the given link is valid.
id: isValidLink
---

`$isValidLink` will check if the given link is valid.

## Usage

```php
$isValidLink[URL]
```

## Parameters

| Field | Type                                                                                              | Description      | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| URL   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Any kind of URL. |   true   |

## Example(s)

This will return `true` as the given link is valid:

```javascript
client.command({
  name: "isValidLink",
  code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
