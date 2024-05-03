---
title: $onlyForGuilds
description: $onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.
id: onlyForGuilds
---

`$onlyForGuilds` will check if the command was executed in one of the listed guilds and return a error message if not.

## Usage

```php
$onlyForGuilds[...guildIds;error]
```

## Parameters

| Field       | Type                                                                                                                                                                                                 | Description                                                                    | Required |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | :------: |
| ...guildIds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Guilds you want to limit the command to.                                       |   true   |
| error       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error to return when the command was not executed in any of the listed guilds. |   true   |

## Example(s)

This will limit the command only to the listed guilds:

```javascript
client.command({
    name: "onlyForGuilds",
    code: `
    Ok.
    $onlyForGuilds[guildID;guildID;You can't use that command here!]
    `
});
```
