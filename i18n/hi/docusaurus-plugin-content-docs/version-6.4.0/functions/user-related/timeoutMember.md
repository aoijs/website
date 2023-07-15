---
title: '$timeoutMember'
description: '$timeoutMember will timeout a given member using Discord''s Timeout feature.'
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## प्रोयोग

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## पैरामीटर्स

| फील्ड          | टाइप           | डिस्क्रिप्शन                                                                                  |    चाहिए     |
| -------------- | -------------- | --------------------------------------------------------------------------------------------- |:------------:|
| guildID        | integer        | The guild ID of where the member is located in.                                               |     true     |
| memberID       | integer        | The ID of the user that will be timeouted.                                                    |     true     |
| timer          | string, number | The duration of the timeout.                                                                  |     true     |
| timeoutEndsAt? | boolean        | Returns time when timeout ends.  <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |
| reason?        | स्ट्रिंग       | The reason that will be displayed in the guild's audit logs.                                  | असत्य (नहीं) |

## ट्रू (हा)

This will timeout a given member for five minutes:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```