---
title: '$roleCount'
description: '$roleCount will return the guild''s role count.'
id: roleCount
---

`$roleCount` will return the guild's role count.

## प्रोयोग

```php
$roleCount[guildID?;fetchFirst?]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                                                                                    |    चाहिए     |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                                                            | असत्य (नहीं) |
| fetchFirst? | boolean | Fetch the roles first before returning the count?  <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of roles of your guild:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```