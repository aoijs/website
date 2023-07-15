---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions will set the permissions of a specific application command.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## Usage

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## Parameters

| Field          | Type            | Description                                                                             | Required |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:--------:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| ID             | integer         | Application command ID.                                                                 |   true   |
| ...perms       | string          | Permissions to change.                                                                  |   true   |