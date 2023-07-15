---
title: '$memberJoinDate'
description: '$memberJoinDate will return a members join date in MS.'
id: memberJoinDate
---

`$memberJoinDate` will return a members join date in MS.

## प्रोयोग

```php
$memberJoinDate[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| userID?  | integer | The ID of the user.  | असत्य (नहीं) |
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return your join date in MS and parsed date:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
