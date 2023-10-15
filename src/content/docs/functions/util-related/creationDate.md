---
title: $creationDate
description: $creationDate will return the creation date of the given Discord User.
id: creationDate
---

`$creationDate` will return the creation date of the given Discord User.

## Usage

```php
$creationDate[id;format?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                         | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| id      | integer                                                                                           | User ID of who you want to get the creation date to be returned of. |   true   |
| format? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The format of the creation date (listed below).                     |  false   |

### Format Input

| Format        | Output                                                     |
| ------------- | ---------------------------------------------------------- |
| ms            | 1522158545409                                              |
| date          | 3/27/2018, 1:49:05 PM                                      |
| time          | 4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds |
| time-full     | 4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds |
| time-humanize | 4y 9mon 6d 2h 24m 30s                                      |

## Example(s)

This will return your account create date:

```javascript
client.command({
  name: "creationDate",
  code: `
  Your account was created: $creationDate[$authorID;date]
  `,
});
```
