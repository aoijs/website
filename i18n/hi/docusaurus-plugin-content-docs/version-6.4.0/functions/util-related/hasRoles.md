---
title: '$hasRoles'
description: '$hasRoles check if the provided user has the roles listed in the roles argument.'
id: hasRoles
---

`$hasRoles` check if the provided user has the roles listed in the roles argument.

## प्रोयोग

```php
$hasRoles[guildID;userID;...roles]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                    | चाहिए |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID  | integer | ID of the guild where the roles are present in. | true  |
| userID   | integer | ID of the user which has the roles.             | true  |
| ...roles | integer | The roles that will be checked for.             | true  |

## ट्रू (हा)

This will return `true` when the user has the listed roles:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
