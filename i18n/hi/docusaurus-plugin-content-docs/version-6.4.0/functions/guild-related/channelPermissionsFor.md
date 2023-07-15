---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor will return the channel permissions of a specific user or role.'
id: channelPermissionsFor
---

`$channelPermissionsFor` will return the channel permissions of a specific user or role.

## प्रोयोग

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                                  |    चाहिए     |
| ------------ | -------- | ----------------------------------------------------------------------------- |:------------:|
| userOrRoleID | integer  | The user or role ID whose permissions shall be returned.                      |     true     |
| channelID    | integer  | The channel ID of the channel of which the permissions should be returned of. |     true     |
| sep?         | स्ट्रिंग | The separator which will be used to separate the permissions, by default ",". | असत्य (नहीं) |

## ट्रू (हा)

This will return your permissions in the channel where you execute the command:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
