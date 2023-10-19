---
title: $createRole
description: $createRole will create a new guild role.
id: createRole
---

`$createRole` will create a new guild role.

## Usage

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## Parameters

| Field                                        | Type                                                                                                | Description                                            | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| guildID                                      | integer                                                                                             | The ID of the guild where the role will be created in. |   true   |
| returnID                                     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
 Return the ID of the newly created role?                                                            | true                                                   |
| name                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the new role.                              |   true   |
| color                                        | integer                                                                                             | The color of the new role.                             |   true   |
| icon                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The image URL that will be used as icon.               |  false   |
| hoist                                        | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
 If the new role should be hoisted.                                                                  | true                                                   |
| unicodeEmoji                                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The unicodeEmoji that will be used as icon.            |  false   |
| position                                     | integer                                                                                             | The position of the role, 1 being the very bottom.     |   true   |
| mentionable                                  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
 If the role is mentionable by `@everyone`.                                                          | true                                                   |
| ...permissions                               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Permissions the role will have.                        |  false   |

## Example(s)

This will create a new role called "Bird" in the color of red:

```javascript
client.command({
  name: "createRole",
  code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`,
});
```
