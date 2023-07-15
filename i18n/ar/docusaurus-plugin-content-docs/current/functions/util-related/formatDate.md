---
title: '$formatDate'
description: '$formatDate will format a given date.'
id: formatDate
---

`$formatDate` will format a given date.

## Usage

```php
$formatDate[date;format?]
```

## Parameters

| Field   | Type   | Description                                                      | Required |
| ------- | ------ | ---------------------------------------------------------------- |:--------:|
| date    | number | The date you want to format.                                     |   true   |
| format? | string | The format that will be used to display the date (listed below). |  false   |

<details open>
  <summary> <h2> Possible formatting </h2></summary>

| Format |                                                            | Returns |
| ------ | ---------------------------------------------------------- | -------:|
| dddd   | Returns the weekday, Monday, Tuesday, Wednesday ...        |  String |
| dd     | Returns the abbreviation of the weekday, Mon, Tue, Wed ... |  String |
| D      | Returns the day of the month                               |  Number |
| DD     | Returns the day of the month                               |  String |
| DDD    | Returns the day of the year, 256, 257 ...                  |  Number |
| M / MM | Returns the month of the year, 10, 11 ...                  |  Number |
| MMM    | Returns the abbreviation of the month, Jan, Feb ...        |  String |
| MMMM   | Returns the month fully January, February ...              |  String |
| YYYY   | Returns year fully, 2020, 2021 ...                         |  Number |
| YY     | Returns the last two digits of the year, 20, 21 ...        |  Number |

</details>

## Example(s)

This will return your current date in the `dddd, DD MMMM YYYY` format:

```javascript
bot.command({
    name: 'formatDate',
    code: `
  $formatDate[$dateStamp;dddd, DD MMMM YYYY]
  `
});
```
