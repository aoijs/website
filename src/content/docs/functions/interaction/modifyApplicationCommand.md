---
title: $modifyApplicationCommand
description: $modifyApplicationCommand will modify an existing application command.
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## Usage

```aoi
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## Parameters

| Field        | Type                                                                                                                                                                                                 | Description                                                             | Required |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------- |
| guild/global | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Application command type.<br/>1. **global**<br/>2. **specific guildID** | true     |
| appID        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Application command ID.                                                 | true     |
| ...options   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | New data for the application command.                                   | true     |
