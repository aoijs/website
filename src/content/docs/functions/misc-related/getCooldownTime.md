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

| Field   | Type                                                                                                | Description                                                                                                               | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | :------: |
| time    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The time of the cooldown.                                                                                                 |   true   |
| type    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Cooldown type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** |   true   |
| command | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Command name.                                                                                                             |   true   |
| id      | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | User/guild/channel/message ID.                                                                                            |   true   |

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
