---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor will return the channel permissions of a specific user or role.'
id: channelPermissionsFor
---

`$channelPermissionsFor` will return the channel permissions of a specific user or role.

## الاستخدام

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                                                  | مطلوب |
| ------------ | ------- | ----------------------------------------------------------------------------- |:-----:|
| userOrRoleID | Integer | The user or role ID whose permissions shall be returned.                      | true  |
| channelID    | Integer | The channel ID of the channel of which the permissions should be returned of. | true  |
| sep?         | string  | The separator which will be used to separate the permissions, by default ",". | false |

## مثال

This will return your permissions in the channel where you execute the command:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
