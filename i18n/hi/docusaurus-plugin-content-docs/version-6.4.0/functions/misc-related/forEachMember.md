---
title: '$forEachMember'
description: '$forEachMember will execute awaited commands for user within the current guild.'
id: forEachMember
---

`$forEachMember` will execute awaited commands for user within the current guild.

## प्रोयोग

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                               | चाहिए |
| -------------- | -------- | ---------------------------------------------------------- |:-----:|
| time           | स्ट्रिंग | How long it takes between each member to execute the next. | true  |
| awaitData      | object   | Awaited Data.                                              | true  |
| ...awaitedCmds | स्ट्रिंग | Awaited Commands to execute.                               | true  |
| endCmd         | स्ट्रिंग | Awaited command to execute when loop ends.                 | true  |

## ट्रू (हा)


```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```