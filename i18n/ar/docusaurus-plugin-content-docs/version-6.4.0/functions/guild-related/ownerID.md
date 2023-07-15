---
title: '$ownerID'
description: '$ownerID will return the ID of the server owner, depending on the given argument.'
id: ownerID
---

`$ownerID` +will return the ID of the server owner, depending on the given argument.

## الاستخدام

```php
$ownerID[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the ID of the server owner where you execute the command in:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```
