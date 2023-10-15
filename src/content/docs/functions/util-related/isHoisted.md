---
title: $isHoisted
description: $isHoisted will check if a specific role is hoisted.
id: isHoisted
---

`$isHoisted` will check if a specific role is hoisted.

## Usage

```php
$isHoisted[roleID;guildID?]
```

## Parameters

| Field    | Type    | Description                                                                | Required |
| -------- | ------- | -------------------------------------------------------------------------- | :------: |
| roleID   | integer | ID of the role you want to check if it's hoisted or not.                   |   true   |
| guildID? | integer | The ID of the guild where you want to check if the role is hoisted or not. |  false   |

## Example(s)

This will check if a role called `Owner` is hoisted in your server:

```javascript
client.command({
  name: "isHoisted",
  code: `
  $isHoisted[$findRole[Owner];$guildID]
  `,
});
```
