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

-   You can retrieve the remaining cooldown in the `$cooldown` function by using **`%time%`** or any of the below.
    -   `%time%` `%year%` `%month%` `%week%` `%day%` `%hour%` `%min%` `%sec%` `%ms%` `%fullTime%`

## Parameters

| Field        | Type                                                                                              | Description                                                    | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | :------: |
| time         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The duration of the cooldown.                                  |   true   |
| id           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Id of a user, role or anything else.                       |   true   |
| errorMessage | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message to be displayed when there's cooldown remaining. |   true   |

## Example(s)

This will set a cooldown for the guild where you execute the command and return the remaining cooldown time:

```javascript
client.command({
    name: "advanceCooldown",
    code: `
  $advanceCooldown[2m;$guildID;Please wait %time% to execute this command again.]
  `
});
```
