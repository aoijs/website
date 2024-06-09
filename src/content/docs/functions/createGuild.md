---
title: $createGuild
description: $createGuild will create a new guild with the client as owner.
id: createGuild
---

`$createGuild` will create a new guild with the client as owner.

## Usage

```aoi
$createGuild[name;icon?;returnId?]
```

:::danger[Limitation]

Discord limited guild creations to bots that are in under _10 servers_!

If your bot is in more than 10 then the function will fail.

:::

## Parameters

| Field     | Type                                                                                                | Description                               | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the guild.                    |   true   |
| icon?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The icon of the guild.                    |  false   |
| returnId? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the id of the newly created guild? |  false   |

## Example(s)

This will create a new guild with your username and avatar:

```javascript
client.command({
    name: "createGuild",
    code: `
  $createGuild[$username;$authorAvatar;true]
  `
});
```
