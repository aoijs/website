---
title: '$cacheMembers'
description: '$cacheMembers will cache all members of a guild.'
id: cacheMembers
---

`$cacheMembers` will cache all members of a guild.

## प्रोयोग

```php
$cacheMembers[guildID?;returnCount?]
```

## पैरामीटर्स

| फील्ड        | टाइप    | डिस्क्रिप्शन                                                                                  |    चाहिए     |
| ------------ | ------- | --------------------------------------------------------------------------------------------- |:------------:|
| guildID?     | integer | Of which guild the members shall be cached from.                                              | असत्य (नहीं) |
| returnCount? | boolean | Returns the cached member count. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will cache all members of the current guild and return the amount of the cached members:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```
