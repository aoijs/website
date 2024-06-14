---
title: $createGuildTemplate
description: $createGuildTemplate will create a new guild template.
id: createGuildTemplate
---

`$createGuildTemplate` will create a new guild template.

## Usage

```aoi
$createGuildTemplate[guildId;name;description;returnCode?]
```

## Parameters

| Field       | Type                                                                                                | Description                      | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| guildId     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The id of the guild.             |   true   |
| name        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the template.        |   true   |
| description | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The description of the template. |   true   |
| returnCode? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the template code?        |  false   |

## Example(s)

This will create a new guild template.

```javascript
client.command({
    name: "createGuildTemplate",
    code: `
  $createGuildTemplate[$guildId;Guild Template;This is a template!;true]
  `
});
```
