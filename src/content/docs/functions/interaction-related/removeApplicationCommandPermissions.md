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

| Field                                                                                                                                          | Type                                                                                                | Description                                                                 | Required |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global                                                                                                                                 | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id                                                                                                                                             | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The application command ID to modify.                                       |   true   |
| roruIds                                                                                                                                        | [integer](https://developer.mozilla.org/en-US/docs/Web/                                             |
| JavaScript/Reference/Global_Objects/Integer),[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Roles or users to modify/remove permissions of, splitted by commas.                                 | true                                                                        |
