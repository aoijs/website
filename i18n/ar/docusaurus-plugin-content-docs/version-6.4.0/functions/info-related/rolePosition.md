---
title: '$rolePosition'
description: '$rolePosition will return the role position of a specific role.'
id: rolePosition
---

`$rolePosition` will return the role position of a specific role.

## الاستخدام

```php
$rolePosition[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| roleID   | Integer | The role ID.  | true  |
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the role position of any role you might like, for this example, we'll use the `@everyone` role:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
