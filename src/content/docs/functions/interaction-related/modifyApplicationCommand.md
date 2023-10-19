---
title: $modifyApplicationCommand
description: $modifyApplicationCommand will modify an existing application command.
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## Usage

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## Parameters

| Field                                                                                                                                          | Type                                                                                                | Description             | Required |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------- | :------: |
| guildID/global                                                                                                                                 | [integer](https://developer.mozilla.org/en-US/docs/Web/                                             |
| JavaScript/Reference/Global_Objects/Integer),[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID**                         | true                    |
| appID                                                                                                                                          | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Application command ID. |   true   |
| ...options                                                                                                                                     | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)   |
| JavaScript/Reference/Global_Objects/Object)                                                                                                    | New data for the application command.                                                               | true                    |
