---
title: '$timeoutMember'
description: '$timeoutMember will timeout a given member using Discord''s Timeout feature.'
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## الاستخدام

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## البارامترات

| Field          | النوع          | الديسكبربشين                                                           | مطلوب |
| -------------- | -------------- | ---------------------------------------------------------------------- |:-----:|
| guildID        | Integer        | The guild ID of where the member is located in.                        | true  |
| memberID       | Integer        | The ID of the user that will be timeouted.                             | true  |
| timer          | string, number | The duration of the timeout.                                           | true  |
| timeoutEndsAt? | boolean        | Returns time when timeout ends.  <br /> 1. true. false (default) | false |
| reason?        | string         | The reason that will be displayed in the guild's audit logs.           | false |

## مثال

This will timeout a given member for five minutes:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```