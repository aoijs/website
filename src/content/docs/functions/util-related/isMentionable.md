---
title: $isMentionable
description: $isMentionable check if a given role is mentionable.
id: isMentionable
---

`$isMentionable` check if a given role is mentionable.

## Usage

```php
$isMentionable[roleID;guildID?]
```

## Parameters

| Field    | Type    | Description                                      | Required |
| -------- | ------- | ------------------------------------------------ | :------: |
| roleID   | integer | The role ID to check if it's mentionable or not. |   true   |
| guildID? | integer | ID of the guild where the role is present in.    |  false   |

## Example(s)

This will check if a role with the name `Owner` is mentionable and returns either `true` or `false`:

```javascript
client.command({
  name: "isMentionable",
  code: `
  $isMentionable[$findRole[Owner];$guildID]
  `,
});
```
