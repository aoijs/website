---
title: $commandsList
description: $commandsList returns a list of commands.
id: commandsList
---

`$commandsList` returns a list of commands, optionally formatted and separated.

## Usage

```aoi
$commandsList[format?;sep?;excludeFunctions?]
```

## Parameters

| Field             | Type                                                                                                | Description                                                                                      | Required |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | :------: |
| format?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)   | Format for each command. Supports `{name}`, `{description}` and other parsers. Default: `{name}` | false    |
| sep?              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)   | Separator between commands in the list. Default: `, `                                            | false    |
| excludeFunctions? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean) | Whether to exclude functions (commands starting with `$`). Default: `true`                       | false    |

## Example(s)

This will list all commands by name, separated by a comma:

```javascript
client.command({
    name: "allCommands",
    code: `
  $commandsList
  `
});
```

This will list commands with their name and description, separated by a semicolon:

```javascript
client.command({
    name: "commandsWithDesc",
    code: `
  $commandsList[{name} - {description}; ;false]
  `
});
```
