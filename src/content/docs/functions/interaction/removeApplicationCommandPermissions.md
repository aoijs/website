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

| Field          | Type                                                                                                                                                                                                 | Description                                                                 | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The application command ID to modify.                                       |   true   |
| roruIds        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Roles or users to modify/remove permissions of, split by commas.            |   true   |
