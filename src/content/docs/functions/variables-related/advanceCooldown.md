---
title: $advanceCooldown
description: $advanceCooldown will set a cooldown for a given ID.
id: advanceCooldown
---

`$advanceCooldown` will set a cooldown for a given ID.

## Usage

```php
$advanceCooldown[time;id;errorMessage]
```

- You are able to retrieve the remaining cooldown in the `$cooldown` function by using **`%time%`** or any of the
  following below.
  - `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Parameters

| Field        | Type    | Description                                                    | Required |
| ------------ | ------- | -------------------------------------------------------------- | :------: |
| time         | string  | Text to be separated.                                          |   true   |
| id           | integer | Text to be separated.                                          |   true   |
| errorMessage | string  | Error message to be displayed when there's cooldown remaining. |   true   |

## Example(s)

This will set a cooldown for the guild of where you execute the command in and return the remaining cooldown time:

```javascript
bot.command({
  name: "advanceCooldown",
  code: `
  $advanceCooldown[2m;$guildID;]
  `,
});
```
