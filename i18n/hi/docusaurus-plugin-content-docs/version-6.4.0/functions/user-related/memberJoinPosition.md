---
title: '$memberJoinPosition'
description: '$memberJoinPosition will return a members join position.'
id: memberJoinPosition
---

`$memberJoinPosition` will return a members join position.

## प्रोयोग

```php
$memberJoinPosition[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| userID?  | integer | The ID of the user.  | असत्य (नहीं) |
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return your join position, if you're the owner then it'd be `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
