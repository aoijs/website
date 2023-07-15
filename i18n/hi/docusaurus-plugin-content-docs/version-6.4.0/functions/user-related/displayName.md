---
title: '$displayName'
description: '$displayName will return the display name of a given user.'
id: displayName
---

`$displayName` will return the display name of a given user.

## प्रोयोग

```php
$displayName[guildID?;userID?;returnUser?]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                                                     |    चाहिए     |
| ----------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                             | असत्य (नहीं) |
| userID?     | integer | The ID of the user.                                                              | असत्य (नहीं) |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will return your displayName, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'displayName',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
