---
title: $wait
description: $wait will delay functions from executing for a given time.
id: wait
---

`$wait` will delay functions from executing for a given time.

## Usage

```aoi
$wait[time]
```

## Parameters

| Field | Type                                                                                                                                                                                                 | Description                      | Required |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| time  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | How long to delay the execution. |   true   |

## Example(s)

This will send an embed delayed:

```javascript
client.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```
