---
title: '$clientOwnerIDs'
description: '$clientOwnerIDs will return the user IDs of the bot owner (or of multiple people if you have a team).'
id: clientOwnerIDs
---

`$clientOwnerIDs` will return the user IDs of the bot owner (or of multiple people if you have a team).

## प्रोयोग

```php
$clientOwnerIDs[separator?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                |    चाहिए     |
| ---------- | -------- | ------------------------------------------- |:------------:|
| separator? | स्ट्रिंग | Separator to split user IDs. (default: `,`) | असत्य (नहीं) |

## ट्रू (हा)

This will return your user ID most likely:

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```
