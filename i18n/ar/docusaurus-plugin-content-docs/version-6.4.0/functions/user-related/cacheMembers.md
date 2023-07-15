---
title: '$cacheMembers'
description: '$cacheMembers will cache all members of a guild.'
id: cacheMembers
---

`$cacheMembers` will cache all members of a guild.

## الاستخدام

```php
$cacheMembers[guildID?;returnCount?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                                           | مطلوب |
| ------------ | ------- | ---------------------------------------------------------------------- |:-----:|
| guildID?     | Integer | Of which guild the members shall be cached from.                       | false |
| returnCount? | boolean | Returns the cached member count. <br /> 1. true. false (default) | false |

## مثال

This will cache all members of the current guild and return the amount of the cached members:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```
