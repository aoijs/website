---
title: $createRole
description: $createRole will create a new guild role.
id: createRole
---

`$createRole` will create a new guild role.

## Usage

```aoi
$createRole[guildID;name;color;position?;icon?;hoist?;unicodeEmoji?;mentionable?;position?;returnId?;...permissions?]
```

## Parameters

| Field           | Type                                                                                                | Description                                                  | Required |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild where the role will be created in.       |   true   |
| name            | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the new role.                                    |   true   |
| color           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The color of the new role.                                   |   true   |
| position?       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The position of the role, 1 being the very bottom.           |  false   |
| icon?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The image URL that will be used as icon.                     |  false   |
| hoist?          | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the new role should be hoisted.                           |  false   |
| unicodeEmoji?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The unicodeEmoji that will be used as icon.                  |  false   |
| mentionable?    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the role is mentionable by `@everyone`.                   |  false   |
| returnID?       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the ID of the newly created role?                     |  false   |
| reason?         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The reason that will be displayed in the guilds' audit logs. |  false   |
| ...permissions? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Permissions the role will have.                              |  false   |

## Example(s)

This will create a new role called "Bird" in the color of red:

```javascript
client.command({
    name: "createRole",
    code: `
    $createRole[$guildID;Bird;FF0000;1;;false;❤;false;false;Some reason!;sendmessages;addreactions]`
});
```
