---
title: '$boostingSince'
description: '$boostingSince will return the starting date of someone boosting a specific guild.'
id: boostingSince
---

`$boostingSince` will return the starting date of someone boosting a specific guild.

## प्रोयोग

```php
$boostingSince[guildID?;userID?;format?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                     |    चाहिए     |
| -------- | -------- | -------------------------------------------------------------------------------- |:------------:|
| guildID? | integer  | The ID of the guild of where you want to check how long someone's been boosting. | असत्य (नहीं) |
| userID?  | integer  | The user ID you want to check the boosting start date of.                        | असत्य (नहीं) |
| format?  | स्ट्रिंग | The format that the date will be returned in, listed below.                      | असत्य (नहीं) |

| Format |                                                         |
| ------ | ------------------------------------------------------- |
| ms     | 1652643158052                                           |
| date   | Sun May 15 2022 20:32:38 GMT+0100 (British Summer Time) |

## ट्रू (हा)

This will return the date when you started boosting (wont work when you're not boosting):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```