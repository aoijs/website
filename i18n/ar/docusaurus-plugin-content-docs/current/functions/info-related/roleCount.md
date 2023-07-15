---
title: '$roleCount'
description: '$roleCount will return the guild''s role count.'
id: roleCount
---

`$roleCount` will return the guild's role count.

## الاستخدام

```php
$roleCount[guildID?;fetchFirst?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                                                             | مطلوب |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |:-----:|
| guildID?    | Integer | The ID of the guild.                                                                     | false |
| fetchFirst? | boolean | Fetch the roles first before returning the count?  <br /> 1. true. false (default) | false |

## مثال

This will return the amount of roles of your guild:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```