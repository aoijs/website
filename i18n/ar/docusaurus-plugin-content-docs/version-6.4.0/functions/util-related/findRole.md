---
title: '$findRole'
description: '$findRole will search and return a given role of a certain guild.'
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## الاستخدام

```php
$findRole[roleResolver;guildID?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                           | مطلوب |
| ------------ | ------- | -------------------------------------- |:-----:|
| roleResolver | string  | Name of the role you want to find.     | true  |
| guildID?     | Integer | Guild ID where the role is present in. | false |

## مثال

This will return the role ID of the role `Owner` if it exists:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
