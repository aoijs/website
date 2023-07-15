---
title: '$userStatus'
description: '$userStatus will return a user''s presence.'
id: userStatus
---

`$userStatus` will return a user's presence.

## प्रोयोग

```php
$userStatus[guildId?;userId?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                    |    चाहिए     |
| -------- | ------- | --------------------------------------------------------------- |:------------:|
| guildId? | integer | The guild ID of which guild you want to retrieve the status of. | असत्य (नहीं) |
| userId?  | integer | The ID of the user you want to return the status of.            | असत्य (नहीं) |

## ट्रू (हा)

This will either return `idle`, `online`, `invisible` or `dnd` depending on your current presence:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
