---
title: $userPlatform
description: $userPlatform will return the platform which the user is using Discord with.
id: userPlatform
---

`$userPlatform` will return the platform which the user is using Discord with.

## Usage

```php
$userPlatform[userID?;guildID?;sep?]
```

## Parameters

| Field    | Type    | Description                                   | Required |
| -------- | ------- | --------------------------------------------- | :------: |
| userID?  | integer | ID of the user.                               |  false   |
| guildID? | integer | The guild ID of where the user is present in. |  false   |
| sep?     | string  | The separator to split multiple platforms.    |  false   |

### Platforms:
- **web** - The user is currently using the web client.
- **mobile** - The user is using the mobile app.
- **desktop** - The user is using the desktop app.
- **none** - The user is either offline, or unable to fetch the platform.

## Example(s)

This will return your platform you're using Discord on:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
