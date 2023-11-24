---
title: $getGuildTemplates
description: $getGuildTemplates will return all guild templates of a specific guild.
id: getGuildTemplates
---

`$getGuildTemplates` will return all guild templates of a specific guild.

## Usage

```php
$getGuildTemplates[guildID?;option?;separator?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                        | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | :------: |
| guildID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Id of the guild you want their templates returned.                             |  false   |
| option?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The option it will be returned as. <br /> 1. **code** (default) <br /> 2. **name** |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The separator which will separate the data returned.                               |  false   |

## Example(s)

This will return all guild templates of the current guild:

```javascript
client.command({
  name: "getGuildTemplates",
  code: `
  $getGuildTemplates[$guildID;code;, ]
  `
});
```
