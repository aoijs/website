---
title: $time
description: $time returns the current time in a specified format.
id: time
---

`$time` returns the current time in a specified format.

## Usage

```aoi
$time[format;isAmPm?]
```

## Parameters

| Field   | Type                                                                                                | Description                                                                    | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :------: |
| format  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The output format using `{hour}`, `{minute}`, `{second}`, `{am}` placeholders. | true     |
| isAmPm? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to use 12-hour format with AM/PM. Default: `false`                     | false    |


## Example(s)

This will return the current time in `HH:MM:SS` format:

```javascript
client.command({
    name: "currentTime",
    code: `
  $time[{hour}:{minute}:{second}]
  `
});
```

This will return the current time in 12-hour format with AM/PM:

```javascript
client.command({
    name: "currentTimeAMPM",
    code: `
  $time[{hour}:{minute}:{second} {am};true]
  `
});
```
