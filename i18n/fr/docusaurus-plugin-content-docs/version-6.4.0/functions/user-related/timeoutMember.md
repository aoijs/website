---
title: '$timeoutMember'
description: '$timeoutMember will timeout a given member using Discord''s Timeout feature.'
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## Usage

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## Parameters

| Field          | Type           | Description                                                                                   | Required |
| -------------- | -------------- | --------------------------------------------------------------------------------------------- |:--------:|
| guildID        | integer        | The guild ID of where the member is located in.                                               |   true   |
| memberID       | integer        | The ID of the user that will be timeouted.                                                    |   true   |
| timer          | string, number | The duration of the timeout.                                                                  |   true   |
| timeoutEndsAt? | boolean        | Returns time when timeout ends.  <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| reason?        | string         | The reason that will be displayed in the guild's audit logs.                                  |  false   |

## Example(s)

This will timeout a given member for five minutes:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```