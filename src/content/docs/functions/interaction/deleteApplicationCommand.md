---
title: $deleteApplicationCommand
description: $deleteApplicationCommand will delete an application command.
id: deleteApplicationCommand
---

`$deleteApplicationCommand` will delete an application command.

## Usage

```php
$deleteApplicationCommand[guildID/global;id]
```

## Parameters

| Field          | Type                                                                                                                                                                                                 | Description                                                                 | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Application command ID which will be deleted.                               |   true   |

## Example(s)

```javascript
client.command({
    name: "deleteApplicationCommand",
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
