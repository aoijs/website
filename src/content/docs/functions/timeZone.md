---
title: $timeZone
description: $timeZone will change the timezone of any time function in the used command.
id: timeZone
---

`$timeZone` will change the timezone of any time function in the used command.

## Usage

```aoi
$timeZone[timezone]
```

## Parameters

| Field    | Type                                                                                              | Description                 | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------- | :------: |
| timezone | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Timezone/Locale formatting. |  false   |

You can find all timezones **[here](https://gist.githubusercontent.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a/raw/8b5abde6f9c7d5570df3a2aa22325d7d20a8b5d7/moment-js-timezones.txt)**.

## Example(s)

You can change the timezone using `$timezone` like the following:

```javascript
client.command({
    name: "time",
    code: `
    $hour:$minute:$second
    $timeZone[America/New_York]
    ` // returns current time of New York
});
```
