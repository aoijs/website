---
title: '$isMentionable'
description: '$isMentionable check if a given role is mentionable.'
id: isMentionable
---

`$isMentionable` check if a given role is mentionable.

## प्रोयोग

```php
$isMentionable[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                     |    चाहिए     |
| -------- | ------- | ------------------------------------------------ |:------------:|
| roleID   | integer | The role ID to check if it's mentionable or not. |     true     |
| guildID? | integer | ID of the guild where the role is present in.    | असत्य (नहीं) |

## ट्रू (हा)

This will check if a role with the name `Owner` is mentionable and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```
