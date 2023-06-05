---
title: $removeApplicationCommandPermissions
description: $removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` will remove permissions of a user or role of a specific application command.

## Usage

```php
$removeApplicationCommandPermissions[guildID/global;id;...roruIds]
```

## Parameters

| Field          | Type            | Description                                                                 | Required |
| -------------- | --------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global | integer         | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id             | integer         | The application command ID to modify.                                       |   true   |
| roruIds        | integer, string | Roles or users to modify/remove permissions of, splitted by commas.         |   true   |
