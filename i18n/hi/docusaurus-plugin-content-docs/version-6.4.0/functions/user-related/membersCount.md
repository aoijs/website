---
title: '$membersCount'
description: '$membersCount will return a guild''s member count.'
id: membersCount
---

`$membersCount` will return a guild's member count.

## प्रोयोग

```php
$membersCount[guildID?;presence?;countBot?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                                                                                        |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?  | integer  | The ID of the guild.                                                                                                                                                | असत्य (नहीं) |
| presence? | स्ट्रिंग | The presence of the users <br /> 1. **all** (default) <br /> 2. **dnd** <br /> 3. **idle** <br /> 4. **offline** <br /> 5. **online** | असत्य (नहीं) |
| countBot? | boolean  | Count bots? <br /> 1. **true** (default) <br /> 2. **false**                                                                                            | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of offline users (including bots) in your guild:

```javascript
bot.command({
    name: 'membersCount',
    code: `
  $membersCount[$guildID;offline;true]
  `
});
```
