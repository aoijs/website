---
title: '$deafenUser'
description: '$deafenUser will deafen a user.'
id: deafenUser
---

`$deafenUser` will deafen a user.

## الاستخدام

```php
$deafenUser[userID;deafen?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                                                    | مطلوب |
| ------- | ------- | ----------------------------------------------------------------------------------------------- |:-----:|
| userID  | Integer | The user who will be deafened or undeafened.                                                    | true  |
| deafen? | boolean | Deafen or Undeafen the given user. <br /> 1. **true** (default) <br /> 2. **false** | false |

## مثال

This will deafen yourself:

```javascript
bot.command({
    name: 'deafen',
    code: `
  $deafen[$authorID;true]
  `
});
```
