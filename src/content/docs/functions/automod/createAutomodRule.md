---
title: $createAutomodRule
description: $createAutomodRule will create a new Discord Automod Rule for the given guild.
id: createAutomodRule
---

`$createAutomodRule` will create a new Discord Automod Rule for the given guild.

## Usage

```aoi
$createAutomodRule[guildID;name;enabled?;reason?]
```

## Parameters

| Field    | Type                                                                                                | Description                                                      | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------- |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild where the automod rule should be created in. | true     |
| name     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the new Automod Rule.                                | true     |
| enabled? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Enable the automod rule?                                         | false    |
| reason?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The reason displayed in the guild's audit logs.                  | false    |

## Example(s)

This will create a automod rule which blocks slur words:

```javascript
client.command({
    name: "createAutomodRule",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
  `
});
```
