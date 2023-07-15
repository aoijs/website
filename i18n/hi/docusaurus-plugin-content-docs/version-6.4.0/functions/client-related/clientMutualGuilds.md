---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds will return the mutual servers with a given user and the bot.'
id: clientMutualGuilds
---

`$clientMutualGuilds` will return the mutual servers with a given user and the bot.

## प्रोयोग

```php
$clientMutualGuilds[userID?;sep?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                   |    चाहिए     |
| ------- | -------- | ---------------------------------------------- |:------------:|
| userID? | integer  | The ID of the user.                            | असत्य (नहीं) |
| sep?    | स्ट्रिंग | The separator to separate the returned values. | असत्य (नहीं) |

## ट्रू (हा)

This will return the mutual servers of you and the bot:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
