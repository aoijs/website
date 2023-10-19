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

| Field          | Type                                                                                                       | Description                                                                 | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id             | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer)        | Application command ID which will be deleted.                               |   true   |

## Example(s)

```javascript
client.command({
  name: "deleteApplicationCommand",
  code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `,
});
```
