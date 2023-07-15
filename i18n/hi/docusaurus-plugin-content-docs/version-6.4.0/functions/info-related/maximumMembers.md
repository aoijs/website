---
title: '$maximumMembers'
description: '$maximumMembers will return the maximal amount of members a guild can have.'
id: maximumMembers
---

`$maximumMembers` will return the maximal amount of members a guild can have.

## प्रोयोग

```php
$maximumMembers[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the maximum of members you can have in your guild:

```javascript
bot.command({
    name: 'maximumMembers',
    code: `
  You can have: $maximumMembers[$guildID] Members in this guild!
  `
});
```
