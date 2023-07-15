---
title: '$userActivity'
description: '$activity will return a user''s activity.'
id: userActivity
---

`$userActivity` will return a user's current activity.

## प्रोयोग

```php
$userActivity[guildID?;userID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. | असत्य (नहीं) |
| userID?  | integer | The user ID.  | असत्य (नहीं) |

## ट्रू (हा)

This will return your current Activity:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```