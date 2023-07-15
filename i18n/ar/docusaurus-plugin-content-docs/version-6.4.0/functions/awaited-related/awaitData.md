---
title: '$awaitData'
description: '$awaitData will return awaited data given in awaited commands.'
id: awaitData
---

`$awaitData` will return awaited data given in awaited commands.

## الاستخدام

```php
$awaitData[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين       | مطلوب |
| ----- | ------ | ------------------ |:-----:|
| name  | string | Awaited Data Name. | true  |

## مثال

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
