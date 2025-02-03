---
title: $repeatMessage
description: $repeatMessage will repeat the given text for a given amount of times.
id: repeatMessage
---

`$repeatMessage` will repeat the given text for a given amount of times.

## Usage

```aoi
$repeatMessage[time;text]
```

## Parameters

| Field | Type                                                                                              | Description                                 | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | :------: |
| time  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The amount of times the text gets repeated. |   true   |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will get repeated.            |   true   |

## Example(s)

This will return `Hello` twenty times:

```javascript
client.command({
    name: "repeatMessage",
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
