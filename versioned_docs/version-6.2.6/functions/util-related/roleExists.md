---
title: $roleExists
description: $roleExists will check if a certain role exists within a certain guild.
id: roleExists
---

`$roleExists` will check if a certain role exists within a certain guild.

## Usage

```php
$roleExists[roleResolver;guildID?]
```

## Parameters

| Field        | Type    | Description                                    | Required |
| ------------ | ------- | ---------------------------------------------- | :------: |
| roleResolver | integer | ID of the role you want to check if it exists. |   true   |
| guildID?     | integer | ID of the guild where the role exists.         |  false   |

## Example(s)

This will return `false` as the role doesn't exist in your guide:

```javascript
bot.command({
    name: 'roleExists',
    code: `
  $roleExists[900004369355931729;$guildID]
  `
});
```