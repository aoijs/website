---
title: $parseDate
description: $parseDate will return the date/time for the given milliseconds
id: parseDate
---

`$parseDate` $parseDate will return the date/time for the given milliseconds

## Usage

```aoi
$parseDate[ms;type?]
```

## Parameters

| Field | Type                                                                                              | Description                                            | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| ms    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Time in ms you want to parse.                          |   true   |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The type in which the parsed date will be returned in. |  false   |

### Types

| Type | Format                                                   |
| ---- | -------------------------------------------------------- |
| time | 1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds |
| date | 1/1/2023, 8:16:20 AM                                     |

## Example(s)

This will return your current date in the `date` [format](#types):

```javascript
client.command({
    name: "parseDate",
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
