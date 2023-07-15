---
title: '$awaitData'
description: '$awaitData will return awaited data given in awaited commands.'
id: awaitData
---

`$awaitData` will return awaited data given in awaited commands.

## प्रोयोग

```php
$awaitData[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन       | चाहिए |
| ----- | -------- | ------------------ |:-----:|
| name  | स्ट्रिंग | Awaited Data Name. | true  |

## ट्रू (हा)

This will return the ID of every server member and log it in your console:

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
