---
title: $setApplicationCommandPermissions
description: $setApplicationCommandPermissions will set the permissions of a specific application command.
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## Usage

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## Parameters

| Field                                                                                                                                         | Type                                                                                                                                                                                                | Description                                                                  | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | :------: |
| guildID/global                                                                                                                                | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID**  |   true   |
| ID                                                                                                                                            | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                   | Application command ID.                                                      |   true   |
| ...perms                                                                                                                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                   | Permissions to change.                                                       |   true   |
