---
title: '$findMembers'
description: '$findMembers will return all members with similar username.'
id: findMembers
---

`$findMembers` will return all members with similar username.

## प्रोयोग

```php
$findMembers[userResolver;limit?;type?;force?;format?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                   |    चाहिए     |
| ------------ | -------- | -------------------------------------------------------------- |:------------:|
| userResolver | स्ट्रिंग | Query of the username the bot will search for.                 |     true     |
| limit?       | number   | The amount of results the bot will return.                     | असत्य (नहीं) |
| टाइप?        | स्ट्रिंग | Type of the search query.                                      | असत्य (नहीं) |
| force?       | boolean  | 1. **true** <br /> 2. **false** (default)                | असत्य (नहीं) |
| format?      | स्ट्रिंग | The format the bot will return the found users (listed below). | असत्य (नहीं) |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the user ID
* {username} -> returns the username
* {nick} -> returns the nickname
* {tag} -> returns the user discriminator

## ट्रू (हा)

This will return twenty members with `Leref` in their username:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```
