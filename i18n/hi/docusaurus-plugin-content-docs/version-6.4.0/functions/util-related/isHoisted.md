---
title: '$isHoisted'
description: '$isHoisted will check if a specific role is hoisted.'
id: isHoisted
---

`$isHoisted` will check if a specific role is hoisted.

## प्रोयोग

```php
$isHoisted[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                               |    चाहिए     |
| -------- | ------- | -------------------------------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if it's hoisted or not.                   |     true     |
| guildID? | integer | The ID of the guild where you want to check if the role is hoisted or not. | असत्य (नहीं) |

## ट्रू (हा)

This will check if a role called `Owner` is hoisted in your server:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```
