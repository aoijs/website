---
title: $cooldown
description: $cooldown will set a cooldown for the author of the command after being used.
id: cooldown
---

`$cooldown` will set a user-based cooldown.

## Usage

```aoi
$cooldown[time;errorMessage]
```

-   You are able to retrieve the remaining cooldown in the `$cooldown` function by using **`%time%`** or any of the
    following below.
    -   `%time%` `%year%` `%month%` `%week%` `%day%` `%hour%` `%min%` `%sec%` `%ms%` `%fullTime%`

## Parameters

| Field        | Type                                                                                              | Description                                                 | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| time         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The duration of the cooldown.                               |   true   |
| errorMessage | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message when there's remaining time for the cooldown. |   true   |

## Example(s)

This will set a cooldown for a command which applies to the user only and returns the remaining cooldown:

```javascript
client.command({
    name: "cooldown",
    code: `
  hello
  $cooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
