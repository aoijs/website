---
title: $getCooldownTime
description: $getCooldownTime will return the cooldown time of a given command.
id: getCooldownTime
---

`$getCooldownTime` will return the cooldown time of a given command.

## Usage

```php
$getCooldownTime[time;type;command;id]
```

## Parameters

| Field   | Type    | Description                                                                                                               | Required |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------- | :------: |
| time    | string  | The time of the cooldown.                                                                                                 |   true   |
| type    | string  | Cooldown type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** |   true   |
| command | string  | Command name.                                                                                                             |   true   |
| id      | integer | User/guild/channel/message ID.                                                                                            |   true   |

## Example(s)

This will return the remaining cooldown of the "getCooldownTime" command:

```javascript
client.command({
  name: "getCooldownTime",
  code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `,
});
```
