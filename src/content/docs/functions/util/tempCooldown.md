---
title: $tempCooldown
description: $tempCooldown will create a temporary cooldown for a command.
id: tempCooldown
---

`$tempCooldown` will create a temporary cooldown for a command.

## Usage

```aoi
$tempCooldown[time;id;errorMessage?]
```

-   You are able to retrieve the remaining cooldown in the `$tempCooldown` function by using **`%time%`** or any of the
    following below.
    -   `%time%` `%year%` `%month%` `%week%` `%day%` `%hour%` `%min%` `%sec%` `%ms%` `%fullTime%`

## Parameters

| Field        | Type                                                                                              | Description                                                 | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| time         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The duration of the cooldown.                               |   true   |
| id           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Can be user, guild, message, channel or any other ID.       |   true   |
| errorMessage | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message when there's remaining time for the cooldown. |   true   |

## Example(s)

This will set a temporary cooldown for a command which applies once only:

```javascript
client.command({
    name: "tempCooldown",
    code: `
  hello
  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]
  `
});
```
