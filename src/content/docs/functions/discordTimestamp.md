---
title: $discordTimestamp
description: $discordTimestamp converts a timestamp into a discord timestamp.
id: discordTimestamp
---

`$discordTimestamp` converts a timestamp into a discord timestamp.

## Usage

```aoi 
$discordTimestamp[ms;flag?] 
```

## Parameters

| Field | Type                                                                                              | Description         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| ms    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | A valid date in ms. |   true   |
| flag? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The flags to use.   |  false   |

| Style           | Input              | Output (12-hour clock)               | Output (24-hour clock)            |
| --------------- | ------------------ | ------------------------------------ | --------------------------------- |
| Default         | `<t:1543392060>`   | November 28, 2018 9:01 AM            | 28 November 2018 09:01            |
| Short Time      | `<t:1543392060:t>` | 9:01 AM                              | 09:01                             |
| Long Time       | `<t:1543392060:T>` | 9:01:00 AM                           | 09:01:00                          |
| Short Date      | `<t:1543392060:d>` | 11/28/2018                           | 28/11/2018                        |
| Long Date       | `<t:1543392060:D>` | November 28, 2018                    | 28 November 2018                  |
| Short Date/Time | `<t:1543392060:f>` | November 28, 2018 9:01 AM            | 28 November 2018 09:01            |
| Long Date/Time  | `<t:1543392060:F>` | Wednesday, November 28, 2018 9:01 AM | Wednesday, 28 November 2018 09:01 |
| Relative Time   | `<t:1543392060:R>` | 3 years ago                          | 3 years ago                       |

## Example(s)

This will return the current time in discord's timestamp formatting (long date):

```js
client.command({
  name: "discordTimestamp",
  code: `$discordTimestamp[$dateStamp;F]`,
});
```
