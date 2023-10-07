---
title: $usersBanned
description: $usersBanned will return the banned users of a guild.
id: usersBanned
---

`$usersBanned` will return the banned users of a guild.

## Usage

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## Parameters

| Field    | Type    | Description                                                                                            | Required |
| -------- | ------- | ------------------------------------------------------------------------------------------------------ | :------: |
| guildID? | integer | The guild ID.                                                                                          |  false   |
| force?   | boolean | 1. **true** <br /> 2. **false** (default)                                                              |  false   |
| option?  | string  | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** |  false   |
| sep?     | string  | Separator to separate multiple returned values.                                                        |  false   |

## Example(s)

This will return the banned users of your guild as mention in an embed:

```javascript
client.command({
  name: "usersBanned",
  code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
