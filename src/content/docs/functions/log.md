---
title: $log
description: $log will log a given message in your bot's console.
id: log
---

`$log` will log a given message in your bot's console.

## Usage

```aoi
$log[content]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                    | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Content of the message to log. |   true   |

## Example(s)

This will log "Aoi.js is great!" in your bot's console:

```javascript
client.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```
