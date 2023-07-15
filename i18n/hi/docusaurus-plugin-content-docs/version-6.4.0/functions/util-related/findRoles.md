---
title: '$findRoles'
description: '$findRoles will return all matching roles depending on the given query.'
id: findRoles
---

`$findRoles` will return all matching roles depending on the given query.

## प्रोयोग

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                     |    चाहिए     |
| ------------ | -------- | ------------------------------------------------ |:------------:|
| roleResolver | स्ट्रिंग | Query to match.                                  |     true     |
| limit?       | number   | The maximum amount of roles the bot will return. | असत्य (नहीं) |
| टाइप?        | स्ट्रिंग | Type of the search query.                        | असत्य (नहीं) |
| format?      | स्ट्रिंग | Formatting for the output.                       | असत्य (नहीं) |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the role ID
* {username} -> returns the role name

## ट्रू (हा)

This will return all roles which are named `Owner`:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
