---
title: $globalCooldown
description: $globalCooldown will set a global-based cooldown for a command.
id: globalCooldown
---

`$globalCooldown` will set a global-based cooldown for a command.

## Usage

```php
$globalCooldown[time;errorMessage]
```

- You are able to retrieve the remaining cooldown in the `$globalCooldown` function by using **`%time%`** or any of the
  following below.
  - `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Parameters

| Field        | Type   | Description                                                      | Required |
| ------------ | ------ | ---------------------------------------------------------------- | :------: |
| time         | string | The duration of the cooldown.                                    |   true   |
| errorMessage | string | Error message given when there's remaining time of the cooldown. |   true   |

## Example(s)

This will return `Hello` and stop anyone from executing the command again for another five minutes:

```javascript
client.command({
  name: "globalCooldown",
  code: `
  Hello
  $globalCooldown[5m;Please wait %time% to execute this command again.]
  `,
});
```
