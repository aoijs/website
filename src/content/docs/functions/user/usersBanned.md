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

| Field    | Type                                                                                                | Description                                                                                            | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The guild ID.                                                                                          |  false   |
| force?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 1. **true** <br /> 2. **false** (default)                                                              |  false   |
| option?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** |  false   |
| sep?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Separator to separate multiple returned values.                                                        |  false   |

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
