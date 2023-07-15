---
title: $findRole
description: $findRole will search and return a given role of a certain guild.
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## Usage

```php
$findRole[roleResolver;guildID?]
```

## Parameters

| Field        | Type    | Description                            | Required |
| ------------ | ------- | -------------------------------------- | :------: |
| roleResolver | string  | Name of the role you want to find.     |   true   |
| guildID?     | integer | Guild ID where the role is present in. |  false   |

## Example(s)

This will return the role ID of the role `Owner` if it exists:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
