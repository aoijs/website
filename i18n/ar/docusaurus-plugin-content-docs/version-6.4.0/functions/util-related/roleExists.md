---
title: '$roleExists'
description: '$roleExists will check if a certain role exists within a certain guild.'
id: roleExists
---

`$roleExists` will check if a certain role exists within a certain guild.

## الاستخدام

```php
$roleExists[roleResolver;guildID?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                   | مطلوب |
| ------------ | ------- | ---------------------------------------------- |:-----:|
| roleResolver | Integer | ID of the role you want to check if it exists. | true  |
| guildID?     | Integer | ID of the guild where the role exists.         | false |

## مثال

This will return `false` as the role doesn't exist in your guide:

```javascript
bot.command({
    name: 'roleExists',
    code: `
  $roleExists[900004369355931729;$guildID]
  `
});
```