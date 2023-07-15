---
title: '$hasAnyRole'
description: '$hasAnyRole will check if the provided user has any of the roles listed in the roles argument.'
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## प्रोयोग

```php
$hasAnyRole[guildID;userID;...roles]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                    | चाहिए |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID  | integer | ID of the guild where the roles are present in. | true  |
| userID   | integer | ID of the user.                                 | true  |
| ...roles | integer | The roles that will be checked for.             | true  |

## ट्रू (हा)

This will return `true` when the user has any of the listed roles:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
