---
title: $addTimestamp
description: $addTimestamp will add a timestamp to an embed.
id: addTimestamp
---

`$addTimestamp` will add a timestamp to an embed.

## Usage

```php
$addTimestamp[ms?]
```

## Parameters

| Field | Type                                                                                                | Description | Required |
| ----- | --------------------------------------------------------------------------------------------------- | ----------- | :------: |
| ms    | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Epoch Time. |  false   |

## Example(s)

This will create a embed with timestamp and description:

```javascript
client.command({
  name: "addTimestamp",
  code: `
  $description[Hello!]
  $addTimestamp[192839ms]
  `,
});
```
