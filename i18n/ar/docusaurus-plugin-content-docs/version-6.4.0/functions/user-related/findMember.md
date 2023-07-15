---
title: '$findMember'
description: '$findMember will find a specific member in a specific guild by their name.'
id: findMember
---

`$findMember` will find a specific member in a specific guild.

## الاستخدام

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                          | مطلوب |
| ------------ | ------- | ----------------------------------------------------- |:-----:|
| userResolver | string  | User you want to find.                                | true  |
| returnSelf?  | boolean | Return the author ID if the given user was not found. | false |
| guildID?     | Integer | Guild ID where the user is present in.                | false |

## مثال

This will return your ID as `Leref` was not found in the given guild:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
