---
title: '$ownerID'
description: '$ownerID will return the ID of the server owner, depending on the given argument.'
id: ownerID
---

`$ownerID` +will return the ID of the server owner, depending on the given argument.

## प्रोयोग

```php
$ownerID[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of the server owner where you execute the command in:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```
