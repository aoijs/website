---
title: '$deafenUser'
description: '$deafenUser will deafen a user.'
id: deafenUser
---

`$deafenUser` will deafen a user.

## प्रोयोग

```php
$deafenUser[userID;deafen?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन                                                                                    |    चाहिए     |
| ------- | ------- | ----------------------------------------------------------------------------------------------- |:------------:|
| userID  | integer | The user who will be deafened or undeafened.                                                    |     true     |
| deafen? | boolean | Deafen or Undeafen the given user. <br /> 1. **true** (default) <br /> 2. **false** | असत्य (नहीं) |

## ट्रू (हा)

This will deafen yourself:

```javascript
bot.command({
    name: 'deafen',
    code: `
  $deafen[$authorID;true]
  `
});
```
