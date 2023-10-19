---
title: $hoistedRole
description: $hoistedRole will return the highest hoisted role of an user.
id: hoistedRole
---

`$hoistedRole` will return the highest hoisted role of an user.

## Usage

```php
$hoistedRole[userID?;guildID?;option?]
```

## Parameters

| Field    | Type                                                                                                | Description                                                                                           | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | :------: |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the user.                                                                                   |  false   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | the ID of the guild.                                                                                  |  false   |
| option?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The option how to return the role <br /> 1. **name** <br /> 2. **id** (default) <br /> 3. **mention** |  false   |

## Example(s)

This will return the name of your highest hoisted role:

```javascript
client.command({
  name: "hoistedRole",
  code: `
  $hoistedRole[$authorID;$guildID;name]
  `,
});
```
