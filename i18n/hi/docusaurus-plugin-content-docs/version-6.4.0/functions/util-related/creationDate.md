---
title: '$creationDate'
description: '$creationDate will return the creation date of the given Discord User.'
id: creationDate
---

`$creationDate` will return the creation date of the given Discord User.

## प्रोयोग

```php
$creationDate[id;format?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------------- |:------------:|
| id      | integer  | User ID of who you want to get the creation date to be returned of. |     true     |
| format? | स्ट्रिंग | The format of the creation date (listed below).                     | असत्य (नहीं) |

### Format Input

| Format        | Output                                                     |
| ------------- | ---------------------------------------------------------- |
| ms            | 1522158545409                                              |
| date          | 3/27/2018, 1:49:05 PM                                      |
| time          | 4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds |
| time-full     | 4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds |
| time-humanize | 4y 9mon 6d 2h 24m 30s                                      |

## ट्रू (हा)

This will return your account create date:

```javascript
bot.command({
    name: 'creationDate',
    code: `
  Your account was created: $creationDate[$authorID;date]
  `
});
```
